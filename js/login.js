import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

window.onload = () => {
    renderLoadAnimation(true);
    setTheme(true);
    
    document.getElementById('email').focus();
}

function autentication() {
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    /* Usa o serviço de autenticação do Firebase para autenticar o usuário com crendenciais válidas */
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            /* Login realizado com sucesso, redireciona pra página de Tarefas */
            const user = userCredential.user;
            localStorage.setItem("user",user);
            window.location.pathname = "/ToDo/html/todo.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Erro no login: ",errorCode,"Msg.:",errorMessage);
            //Caso as credenciais não sejam validas, pede pra criar uma conta ou recuperar a senha
            let form = document.querySelector('form');
            let alertDiv = document.createElement('div');
            alertDiv.id = "divAlerta";
            let contentAlert = document.createElement('span');
            contentAlert.id = "removeAfter2s";
            let textAlert;
            if (error.code === 'auth/user-not-found'){
                textAlert = document.createTextNode("Usuário não encontrado, que tal criar uma conta?");
            } else if (error.code === 'auth/wrong-password'){
                textAlert = document.createTextNode("Senha inválida. Caso não lembre da senha recupere-a clicando em Recuperar Senha.");
            } else if (error.code === 'auth/too-many-requests'){
                textAlert = document.createTextNode("Muitas tentativas de login. O acesso à sua conta está bloqueado, redefina sua senha ou tente logar novamente mais tarde.");
            }else if (error.code === 'auth/invalid-email'){
                textAlert = document.createTextNode("Email inválido. Verifique o email digitado e tente novamente.");
            } else {
                textAlert = document.createTextNode("Desculpe, estamos passando por instabilidades. Tente novamente mais tarde.");
            }
            
            contentAlert.appendChild(textAlert);
            alertDiv.appendChild(contentAlert);

            form.after(alertDiv);
        });

        // Remove o alert de erro no login
        if (document.getElementById("divAlerta") != null || document.getElementById("divAlerta") != undefined) {
            setTimeout(function(){
                var msg = document.getElementById("divAlerta");
                msg.parentNode.removeChild(msg);   
            }, 1);
        }
    
}

const submitButton = document.getElementById('submit-button');
submitButton.onclick = ev =>{
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

    setTheme(true);
 }