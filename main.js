async function listaProdutos() {
    const conexao = await fetch("https://HILTONESJR.github.io/floricultura/produtos.json");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(imagem, titulo, valor, descricao) {
    const conexao = await fetch("https://HILTONESJR.github.io/floricultura/produtos.json", {
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
        throw new Error("Não foi possível enviar o produto!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const conexao = await fetch(`https://HILTONESJR.github.io/floricultura/produtos.json/${id}`, {
        method: "DELETE"
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível deletar o produto!");
    }
}

export const exportAPI = {
    listaProdutos,
    criaProduto,
    deletaProduto
};
