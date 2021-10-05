let closeLogin = document.getElementById('close-login');
closeLogin.addEventListener('click', closeLog);
let closeRegistro = document.getElementById('close-registro');
closeRegistro.addEventListener('click', closeRegis);

let togleAdm = document.getElementById('log-adm');
togleAdm.addEventListener('click', logAdm);

function logAdm() {
    if (togleAdm.checked) {
        document.getElementsByClassName('clave-adm')[0].style.display = "grid";
        document.getElementsByClassName('togle-adm')[0].style.margin = "-2% 0 2% 0";
    } else {
        document.getElementsByClassName('clave-adm')[0].style.display = "none";
        document.getElementsByClassName('togle-adm')[0].style.margin = "-2% 0 4% 0";
    }
}

function closeLog(e) {
    e.preventDefault();
    document.getElementById('popup-login').style.display = "none";
}

function closeRegis(e) {
    e.preventDefault();
    document.getElementById('popup-registro').style.display = "none";
}

function openLogin() {
    document.getElementById('popup-registro').style.display = "none";
    let open = document.getElementById('popup-login').style.display = "grid";
    document.getElementById('popup-login').style.transition = open + " .3s ease-out";
}

function openRegistro() {
    document.getElementById('popup-login').style.display = "none";
    let open = document.getElementById('popup-registro').style.display = "grid";
    document.getElementById('popup-registro').style.transition = open + ".3s ease-out";
}

//datos de inicio de sesion
const formLog = document.getElementById('form-login');
formLog.addEventListener('submit', function(event) {
    event.preventDefault();
    let correo = document.getElementById('correo-log').value;
    let pasword = document.getElementById('pasword-log').value;

    if (correo == "omar@gmail.com" && pasword == "123") {
        window.location.href = "st-dashboard.html";
    } else {
        console.log("error de sesion")
    }
});