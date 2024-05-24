import { exportAPI } from "../main.js";

const lista = document.querySelector("[data-lista]");

function exibirNaTela(produto) {
    const item = document.createElement('div');
    item.classList.add('produto-item');

    item.innerHTML = `
        <img class="imagem-produto" src="${produto.imagem}" alt="">
        <h1 class="titulo-produto">${produto.titulo}</h1>
        <span class="descricao-produto">${produto.descricao}</span>
        <p class="valor-produto">R$:${produto.valor}</p>
        <button class="deletar-produto" data-id="${produto.id}">Deletar</button>
    `;

    const botaoDeletar = item.querySelector(".deletar-produto");
    botaoDeletar.addEventListener("click", async () => {
        try {
            await exportAPI.deletaProduto(produto.id);
            item.remove();
        } catch (e) {
            alert(e.message);
        }
    });

    lista.appendChild(item);
}

async function carregarProdutos() {
    try {
        const listaApi = await exportAPI.listaProdutos();
        listaApi.forEach(produto => exibirNaTela(produto));
    } catch {
        lista.innerHTML = `<h2>Não foi possível carregar a lista de produtos.</h2>`;
    }
}

carregarProdutos();


