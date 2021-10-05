let togleMenuUser = document.getElementById('menu-user');
togleMenuUser.addEventListener('click', menUser)

function menUser() {
    if (togleMenuUser.checked) {
        document.getElementById('div-user').style.display = "grid";
        document.getElementsByClassName('fa-user')[0].style.opacity = "1";
    } else {
        document.getElementById('div-user').style.display = "none";
        document.getElementsByClassName('fa-user')[0].style.opacity = "0.8";
    }
}

function logOut() {
    window.location.href = "index.html";
}