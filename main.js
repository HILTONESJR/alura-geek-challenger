async function listaProdutos(){
    const conexao = await fetch("http://localhost:3000/produtos");
    const produtosConvertidos = conexao.json();

    exibirNaTela(listaProdutos);
}


