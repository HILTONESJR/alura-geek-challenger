async function listaProdutos(){
    const conexao = await fetch("http://localhost:3000/produtos");
    const produtosConvertidos = await conexao.json();

    return produtosConvertidos;
}


async function criaProduto(imagem, titulo, descricao, valor, icon) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            valor: valor,
            imagem: imagem,
            icon: icon
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o video!.")
    }

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conexaoAPI = {
listaProdutos,
criaProduto
}


