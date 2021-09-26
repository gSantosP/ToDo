window.onload = () => {
    renderLoadAnimation();
    setTheme();
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

    console.log(isValid)
    
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
     if(window.sessionStorage.getItem('theme') == 'dark'){
        window.sessionStorage.setItem('theme', 'light')
     } else if(window.sessionStorage.getItem('theme') == 'light'){
        window.sessionStorage.setItem('theme', 'dark')
    }

    setTheme();
 }