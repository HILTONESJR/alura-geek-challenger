<<<<<<< HEAD:js/mostraProdutos.js
import { exportAPI } from "./main.js";

const inserirItens = document.querySelector("[data-lista]");

export default function exibirNaTela(listaProdutos){
=======
import { exportAPI } from "../main.js";

const inserirItens = document.querySelector("[data-lista]");

export default function exibirNaTela('listaProdutos'){
>>>>>>> 9be06dcf6b27e282931f9846c17fed28ac6453c2:js/listar-itens.js
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
        exibirNaTela(elemento.imagem, elemento.titulo, elemento.video, elemento.descricao)))
    } catch {
       inserirItens.innerHTML = `<h2>Não foi possivel carregar a lista de videos.</h2>
`
    }
}

<<<<<<< HEAD:js/mostraProdutos.js
listaProdutos();
=======
listaProdutos();
>>>>>>> 9be06dcf6b27e282931f9846c17fed28ac6453c2:js/listar-itens.js
