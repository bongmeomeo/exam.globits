let userName = document.getElementById('email').value;
let passWord = document.getElementById('pwd').value;
let needInput = document.getElementsByClassName('need-input');
let loginSystem = document.getElementById('login-system');
var btnLogin = document.getElementById('btn-login');


btnLogin.onclick = function clickLogin() {

    if (userName == '' && passWord == '') {

        needInput[0, 1].innerHTML = 'Fill this box!';

    } else if (userName == 'admin' && passWord == 'admin') {
        btnLogin.innerHTML = 'LOGIN SUCCESS';
    } else {
        needInput[1].innerHTML = ' Wrong password or username!'
    }
};