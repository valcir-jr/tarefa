const form = document.getElementById("form");
const listaProdutos = document.getElementById("lista-produtos");

async function carregarProdutos() {
    const resposta = await fetch("http://localhost:3000/item");
    const produtos = await resposta.json();
    listaProdutos.innerHTML = "";
    produtos.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco}`;

        const btnAtualizar = document.createElement("button");
        btnAtualizar.textContent = "Editar";
        btnAtualizar.setAttribute("class", "upd-btn");
        btnAtualizar.addEventListener("click", () => atualizarProduto(item._id));

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.setAttribute("class", "del-btn");
        btnExcluir.addEventListener("click", () => excluirProduto(item._id));

        li.appendChild(btnAtualizar);
        li.appendChild(btnExcluir);
        listaProdutos.appendChild(li);
    });
}

async function atualizarProduto(id) {
    const nome = prompt("Novo nome do produto:");
    const preco = prompt("Novo valor do produto:");

    if (nome && preco) {
        const resposta = await fetch(`http://localhost:3000/item/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ nome, preco })
        });

        if (resposta.ok) {
            carregarProdutos();
        }
    }
}

async function excluirProduto(id) {
    const resposta = await fetch(`http://localhost:3000/item/${id}`, {
        method: "DELETE"
    });
    if (resposta.ok) {
        carregarProdutos();
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;

    const resposta = await fetch("http://localhost:3000/item", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ nome, preco })
    });

    if(resposta.ok) {
        carregarProdutos();
    }
});

carregarProdutos();