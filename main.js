async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(imagem, titulo, video, descricao) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            titulo: titulo,
            valor: valor,
            descricao: descricao
        })
            
    });
    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o video!.")
    }

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const exportAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
}
