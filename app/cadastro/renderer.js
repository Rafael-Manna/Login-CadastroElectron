function registrarCad(){
 const pessoa = {
    email: document.getElementById('emailcad').value,
    senha: document.getElementById('senhacad').value
}
window.api.cadastro(pessoa)
window.location.href = '../login/login.html';
}

