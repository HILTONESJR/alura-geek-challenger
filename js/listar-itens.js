import { exportAPI } from "../main.js";

const inserirItens = document.querySelector("[data-lista]");

export default function exibirNaTela('listaProdutos'){
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
return produto;
    })
}

async function listaProdutos() {
    try 
    {
        const listaApi = await exportAPI.listaProdutos();
        listaApi.forEach(elemento => inserirItens.appendChild(
        exibirNaTela(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch {
       inserirItens.innerHTML = `<h2>Não foi possivel carregar a lista de videos.</h2>
`
    }
}

listaProdutos();
