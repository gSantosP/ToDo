import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

window.onload = () => {
    renderLoadAnimation();
    setTheme()

    document.getElementById("email").focus();
}

// Valida a senha inserida
function validaPass(pass) {
    if (pass == null || pass.length < 8)
        return false;
    else
        return true;
}

// Valida o email usuário inserido
function validaEmail(email) {
    if (email.length < 20)
        return false;
    else
        return true;
}

// Salva o novo usuário no banco
function saveUser() {
    const auth = getAuth();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repass = document.getElementById('rep-pass').value;

    if (!validaEmail(email)) {
        alert("O endereço de email é inválido!");
    }
    else if (!validaPass(password)) {
        alert("A senha deve conter, no mínimo, 8 caracteres!");
    }
    else if (password != repass) {
        alert("As senhas inseridas não correspondem!");
    } else {
        //Passando pela validação, a função do Firebase Auth é acionada pra salvar o usuário
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                //Após o cadastro, o usuário é redirecionado para a página de tarefas
                const user = userCredential.user;
                //Seta o nome do usuário
                updateProfile(auth.currentUser, {
                    displayName: `${name}`,
                }).then(() => {
                    console.log(name);
                }).catch((error) => {
                    console.log("Ocorreu um erro", error);
                })
                window.location.pathname = "/ToDo/"
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Erro no cadastro: ", errorCode, "Msg.:", errorMessage)
                //Caso o email já esteja sendo utilizado orientar usuário a fazer login ou recuperar a senha
                let form = document.querySelector('form');
                let alertDiv = document.createElement('div');
                alertDiv.id = "divAlerta";
                let contentAlert = document.createElement('span');
                contentAlert.id = "removeAfter2s";
                let textAlert = document.createTextNode("Email já utilizado, por favor tente fazer login ou recuperar sua senha!");
                contentAlert.appendChild(textAlert);
                alertDiv.appendChild(contentAlert);

                form.after(alertDiv);

            });

    }
    // Remove o alert de usuário já cadastrado
    if (document.getElementById("divAlerta") != null || document.getElementById("divAlerta") != undefined) {
        setTimeout(function () {
            var msg = document.getElementById("divAlerta");
            msg.parentNode.removeChild(msg);
        }, 1);
    }

}

const submitButton = document.getElementById('submit-button');
submitButton.onclick = ev => {
    ev.preventDefault();

    saveUser();
}

const themeButton = document.getElementById("theme-button");
themeButton.onclick = () => {
    if (window.sessionStorage.getItem('theme') == 'dark') {
        window.sessionStorage.setItem('theme', 'light')
    } else if (window.sessionStorage.getItem('theme') == 'light') {
        window.sessionStorage.setItem('theme', 'dark')
    }

    setTheme();
}

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("keydown", ev => input.style.border = "1px solid #73B3FD90")
})