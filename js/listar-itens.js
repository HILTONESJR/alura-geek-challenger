import { conexaoAPI } from "../main.js";

const listProdutos = document.querySelector("[data-lista]");

export default function constroiCard(imagem, titulo, descricao, valor, icon) {
    const produto = document.createElement("li");
    produto.className = "card-item";
    produto.innerHTML = `<img src="" alt="${imagem}">
    <h1>${titulo}</h1>
    <span>${descricao}</span>
    <p>R$:${valor}</p>
    <img src="${icon}" alt="">`

    return produto;
}