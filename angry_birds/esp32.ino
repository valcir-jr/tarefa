#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>

// =========================
// CONFIG WIFI
// =========================
const char* ssid = "LAB 108";
const char* password = "fatec258";

// =========================
// PINOS
// =========================
#define TRIG_PIN 26
#define ECHO_PIN 25
#define JOY_Y 34
#define JOY_BTN 33

// =========================
// WEBSOCKET
// =========================
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");

// =========================
// CONTROLE
// =========================
float lastForce = -1;
float lastAngle = -999;
int lastFire = 0;

float deltaForce = 0.03;
float deltaAngle = 2.0;
int deltaFire = 1;

unsigned long lastRead = 0;
unsigned long interval = 60;

// limites ultrassom
float minDist = 5;     // força máxima
float maxDist = 40;    // força mínima

float smoothForce = 0;
bool firstForce = true;

// =========================
// ULTRASSOM MAIS ESTÁVEL
// =========================
float lerUltrassom() {
  // Dispara o pulso
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duracao = pulseIn(ECHO_PIN, HIGH, 25000);

  // evita valores inválidos
  if (duracao == 0) return maxDist;

  float distancia = duracao * 0.0340 / 2.0;

  // limita entre min/max
  if (distancia < minDist) distancia = minDist;
  if (distancia > maxDist) distancia = maxDist;

  return distancia;
}

float calcularForca(float dist) {
  float f = 1.0 - ((dist - minDist) / (maxDist - minDist));
  f = constrain(f, 0.0, 1.0);

  // primeira leitura sem suavização
  if (firstForce) {
    smoothForce = f;
    firstForce = false;
  }

  // suavização mais forte (85% novo, 15% antigo)
  smoothForce = (f * 0.85) + (smoothForce * 0.15);

  return smoothForce;
}

float lerAnguloJoystick() {
  int val = analogRead(JOY_Y); // 0–4095
  float ang = map(val, 0, 4095, 60, -60);  
  return ang;
}

void enviarJSON(float força, float angulo, int fire) {
  char buffer[90];
  snprintf(buffer, sizeof(buffer),
    "{\"f\":%.2f,\"a\":%.1f,\"b\":%d}", força, angulo, fire);

  ws.textAll(buffer);
}

// =========================
// SETUP
// =========================
void setup() {
  Serial.begin(115200);

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(JOY_BTN, INPUT_PULLUP);

  WiFi.begin(ssid, password);
  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    delay(400);
    Serial.print(".");
  }
  Serial.println("\nWiFi conectado!");
  Serial.println(WiFi.localIP());

  ws.onEvent([](AsyncWebSocket *s, AsyncWebSocketClient *c,
                AwsEventType t, void *arg, uint8_t *data, size_t len) {
    if (t == WS_EVT_CONNECT) Serial.println("Cliente conectado!");
  });

  server.addHandler(&ws);
  server.begin();
}

// =========================
// LOOP
// =========================
void loop() {
  ws.cleanupClients();

  if (millis() - lastRead < interval) return;
  lastRead = millis();

  float dist = lerUltrassom();
  float force = calcularForca(dist);
  float angle = lerAnguloJoystick();
  int fire = !digitalRead(JOY_BTN);

  bool mudou = false;

  if (abs(force - lastForce) > deltaForce) {
    lastForce = force;
    mudou = true;
  }

  if (abs(angle - lastAngle) > deltaAngle) {
    lastAngle = angle;
    mudou = true;
  }

  if (fire != lastFire) {
    lastFire = fire;
    mudou = true;
  }

  if (mudou) {
    enviarJSON(force, angle, fire);
  }
}
