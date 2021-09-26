window.onload = renderLoadAnimation

// Valida a senha inserida
function validaPass(pass) {
    if(pass == null || pass.length < 8)
        return false;
    else
        return true;
}

// Valida o nome de usuário inserido
function validaUserName(userName) {
    if(userName.length < 5)
        return false;
    else
        return true;
}

// Contrutor para novos usuários
function NewUser(userName,  pass){
    this.userName = userName;
    this.pass = pass;
}

// Salva o novo usuário no localstorage
function saveUser() {

    let users = window.localStorage.getItem("users");
    
    if(users == null || users == undefined || users == ''){
        users = JSON.stringify([]);
        window.localStorage.setItem("users", users);
    }
    
    const userName = document.getElementById("User").value;
    const pass = document.getElementById("Pass").value;
    const confimPass = document.getElementById("rep-pass").value;
    
    const newUser = new NewUser(userName, pass);
    
    
    if(!validaUserName(newUser.userName)){
        alert("O nome de usuário deve conter, no mínimo, 5 caracter!");
    }
    else if(!validaPass(newUser.pass)){
        alert("A senha deve conter, no mínimo, 8 caracters!");
    }
    else if(newUser.pass != confimPass){
        alert("As senhas inseridas não correspondem!");
    }
    else{
        
        users = JSON.parse(users);
        users.push(newUser);
        window.localStorage.setItem("users", JSON.stringify(users));

        alert("Usuário criado com sucesso!");

        window.location.pathname = "/ToDo/";
    }
    
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', e => {
    e.preventDefault();

    saveUser();

})