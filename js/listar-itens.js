import { conexaoAPI } from "../main.js";

const inserirItens = document.querySelector("[data-lista]");

fuction exibirNaTela('listaProdutos'){
    listaProdutos.forEach(produto => {
        inserirItens.innerHTML = `
                <div class="produto-item">
                    <img class="imagem-produto" src="${produto.imagem}" alt="">
                    <h1 class="titulo-produto">${produto.titulo}</h1>
                    <span class="descricao-produto">${produto.descricao}</span>
                    <p class="valor-produto">R$:${produto.valor} </p>
                    <img class="icone-produto" src="${produto.icon}" alt="icone-lixeira">
                </div>
        `
    })
}
