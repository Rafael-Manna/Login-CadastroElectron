function realizarCadastro() {
    window.location.href = '../cadastro/cadastro.html';
}
function realizarLogin(){
    const pessoa = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    }
    console.log(pessoa)
    window.api.login(pessoa).then((resultado) => {
        if (resultado) {
            localStorage.setItem('usuarioLogado', resultado);
            window.location.href = '../home/principal.html';
        } else {
          alert('Login ou senha incorretos. Tente novamente.');
        }
})
}
