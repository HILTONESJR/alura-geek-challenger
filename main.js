async function listaProdutos(){
    const conexao = await fetch("https://github.com/HILTONESJR/alura-geek-challenger/blob/main/db.json");
    const produtosConvertidos = conexao.json();

    exibirNaTela(listaProdutos);
}


