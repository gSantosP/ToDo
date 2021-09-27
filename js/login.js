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
    
    if(userName.length < 5){
        document.getElementById('User').style.border = "1px solid red";
        alert("O nome de usuário deve conter mais de 5 caracters");
    }
    else if(pass.length < 8){
        document.getElementById('Pass').style.border = "1px solid red"
        alert("O campo senha deve conter mais de 8 caracters!")
    }
    else if(isValid == false || isValid == undefined || isValid == null || isValid == ''){
        alert("Nome de usuário ou senha incorreto!");
    }
    else{
        window.sessionStorage.setItem("user", userName);
        window.location.pathname = "/ToDo/html/todo.html";
    }
}

const userNameInput = document.getElementById('User');
userNameInput.addEventListener('keypress', ()=>{
    userNameInput.style.border = "1px solid #73b3fd"
})

const passInput = document.getElementById('Pass');
passInput.addEventListener('keypress', ()=>{
    passInput.style.border = "1px solid #73b3fd"
})

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