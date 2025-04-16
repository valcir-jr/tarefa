const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const disco = {
    titulo:  document.getElementById("artista").value,
    artista: document.getElementById("artista").value,
    ano:     document.getElementById("artista").value,
    genero:  document.getElementById("artista").value,
    formato: document.getElementById("artista").value, 
    preco:   document.getElementById("artista").value
  };

  const response = await fetch("http://localhost:3000/cadastro", {
    method: "POST",
    headers: {
      "Content-type": "application/json"    
    },
    body: JSON.stringify(disco)
  });

  if(response.ok) {
    carregarLista();
  }
});

async function carregarLista() {
  const response = await fetch("http://localhost:3000/cadastro");
  const discos = await response.json();
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  discos.forEach((item) => {
    const divContainer = document.createElement("div");
    divContainer.className = "itens";
    divContainer.innerHTML = `
      <strong>${item.titulo}</strong> - ${item.artista} (${item.ano})
      <p>Gênero: ${item.genero} - Formato: ${item.formato} - Preço: ${item.preco}</p>
      <button class="btn-editar" onclick="atualizarDisco("${item._id}")">Editar</button>
      <button class="btn-excluir" onclick="excluirDisco("${item._id}")">Excluir</button>
    `;
    lista.appendChild(divContainer);
  })
}

async function atualizarDisco(id) {

}

async function excluirDisco(id) {
  if(confirm("Tem certeza que deseja fazer isso?")) {
    await fetch(`http://localhost:3000/cadastro/${id}`, {
      method: "DELETE"
    });

    carregarLista();
  }
}

window.onload = carregarLista();