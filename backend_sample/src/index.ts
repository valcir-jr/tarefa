import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Animal from "./models/animais";

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/cadastro";

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Erro ao conectar:", err))

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// -----------------------------------------------------------

app.post("/api/pets", async (req, res) => {
  try {
    const novoPet = new Animal({
      nome:    req.body.nome,
      especie: req.body.especie,
      idade:   req.body.idade,
      tutor:   req.body.tutor,
      contato: req.body.contato
    })
    const salvarPet = await novoPet.save();
    res.status(201).json(salvarPet);
  } catch(error) {
    res.status(500).json({ message: "Erro ao cadastrar", error });
  }
});

// Funciona com ou sem o filtro de idade e especie
app.get("/api/pets", async (req, res) => {
  const { idade, especie } = req.query;
  const filtro: any = {};

  if (idade) {filtro.idade = Number(idade)};
  if (especie) {filtro.especie = especie};

  try {
    const pets = await Animal.find(filtro);
    if (pets.length === 0) {
      res.status(404).json({ message: "Não encontrado" });
      return
    }
    res.status(200).json(pets);
  } catch {
    res.status(500).json({ message: "Erro ao buscar a lista" });
  }
});

app.get("/api/pets/search", async (req, res): Promise<any> => {
  const keyword = req.query.query;
  try {
    const pet = await Animal.findById(keyword);
    if (!pet) {
      return res.status(404).json({ message: "Não encontrado "});
    }
    res.status(200).json(pet);
  } catch {
    res.status(404).json({ message: "Erro na busca" });
  }
});

app.put("/api/pets/:id", async (req, res): Promise<any> => {
  const { id } = req.params;
  const { nome, especie, idade, tutor, contato } = req.body;  
  try {
    const atualizarAnimal = await Animal.findByIdAndUpdate(
      id,
      {nome, especie, idade, tutor, contato},
      {new: true}
    );
    if(!atualizarAnimal) {
      return res.status(400).json({ message: "Erro ao atualizar" });
    }
    res.json(atualizarAnimal);
  } catch(error) {
    res.status(400).json({ message: "Erro ao atualizar" });
  }
});

app.delete("/api/pets/:id", async (req, res): Promise<any> => {
  const { id } = req.params;
  try {
    const deletarAnimal = await Animal.findByIdAndDelete(id);
    if (!deletarAnimal) {
      return res.status(404).json({ message: "Item não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar" });
  }
});

