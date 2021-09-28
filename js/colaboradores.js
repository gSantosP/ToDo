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
     if(window.localStorage.getItem('theme') == 'dark'){
        window.localStorage.setItem('theme', 'light')
     } else if(window.localStorage.getItem('theme') == 'light'){
        window.localStorage.setItem('theme', 'dark')
    }

    setTheme();
 }