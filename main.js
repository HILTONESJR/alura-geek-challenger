// Conecta com a API recebendo retorno dos dados
let produtos = [];

const endpointAPI = 'http://localhost:3000/produtos';
getProdutosAPI();
const inserirItens = document.querySelector("[data-lista]");

async function getProdutosAPI() {
    try {
        const res = await fetch(endpointAPI);
        if (!res.ok) {
            throw new Error(`Erro: ${res.status} ${res.statusText}`);
        }
        produtos = await res.json();
        exibirNaTela(produtos);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}

// Insere os itens do array na tela.
function exibirNaTela(ListaProdutos) {
    inserirItens.innerHTML = '';
    ListaProdutos.forEach(produto => {
        inserirItens.innerHTML += `
            <div class="produto-item">
                <img class="imagem-produto" src="${produto.imagem}" alt="${produto.titulo}">
                <h1 class="titulo-produto">${produto.titulo}</h1>
                <span class="descricao-produto">${produto.descricao}</span>
                <p class="valor-produto">R$ ${produto.valor}</p>
            </div>
        `;
    })
}