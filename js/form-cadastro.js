
const cadastro = document.querySelector('.principal__formulario');
const login = document.querySelector('.login_principal');
const btCadastro = document.querySelector('.botao-cadastro');
const btLogin = document.querySelector('.botao-login');

btLogin.addEventListener('click', ()=>{
    cadastro.classList.remove('ative')
    login.classList.add('ative')
})

btCadastro.addEventListener('click', ()=> {
    login.classList.remove('ative')
    cadastro.classList.add('ative')
})

login.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;

    if (email === 'admin@gmail.com.br' && password === '123456789') {
        window.location.href = '../pages/admin.html';
    } else {
        alert('Email ou senha inválidos. Tente novamente.');
    }
});