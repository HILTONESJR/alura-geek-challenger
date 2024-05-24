import { exportAPI } from "./main.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const video = document.querySelector("[data-valor]").value;
    const descricao = document.querySelector ("[data-descricao]").value;
try {
    await exportAPI.criaProduto(imagem, titulo, valor, descricao);
    window.location.href = "../pages/envio-concluido.html";
} catch (e){
    alert(e);

}
}

formulario.addEventListener("submit", evento => criarProduto(evento))