window.onload = () => {
    renderLoadAnimation();
    checkUser();
    setTheme();
}

function checkUser(){
    const user = window.sessionStorage.getItem("user");

    if(user == null || user == undefined || user == ""){
        window.location.pathname = "/ToDo/"
    }
}

const themeButton = document.getElementById("theme-button");
 themeButton.onclick = () => {
     if(window.sessionStorage.getItem('theme') == 'dark'){
        window.sessionStorage.setItem('theme', 'light')
     } else if(window.sessionStorage.getItem('theme') == 'light'){
        window.sessionStorage.setItem('theme', 'dark')
    }

    setTheme();
 }