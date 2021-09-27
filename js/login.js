window.onload = () => {
    renderLoadAnimation(true);
    setTheme(true);
    
    document.getElementById('User').focus();
}


function autentication() {

        const userName= document.getElementById('User').value;
        const pass = document.getElementById('Pass').value;

    let users = window.localStorage.getItem("users");
    users = JSON.parse(users);
    
    let isValid = false;
    isValid = users.find(e => {
        return e.userName === userName && e.pass === pass;
    })
    
    if(isValid == false || isValid == undefined || isValid == null || isValid == ''){
        alert("Usuario inválido!");
    }else{
        window.sessionStorage.setItem("user", userName);
        window.location.pathname = "/ToDo/html/todo.html";
    }
}

const submitButton = document.getElementById("submit-button");
submitButton.onclick = ev => {
    ev.preventDefault();

    autentication();
}

const themeButton = document.getElementById("theme-button");
 themeButton.onclick = () => {
     if(window.localStorage.getItem('theme') == 'dark'){
        window.localStorage.setItem('theme', 'light')
     } else if(window.localStorage.getItem('theme') == 'light'){
        window.localStorage.setItem('theme', 'dark')
    }

    setTheme(true);
 }