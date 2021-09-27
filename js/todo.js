window.onload = startApp;


// Inicia a aplicalção
function startApp(){
    renderLoadAnimation();
    setDatas();
    checkUser();
    renderTaskCards();
    setTheme()
}

// logout
function exit(){
    window.sessionStorage.removeItem('user');
}

function checkUser(){
    const user = window.sessionStorage.getItem("user");

    if(user == null || user == undefined || user == ""){
        window.location.pathname = "/ToDo/"
    }
}

// Define as regras para as datas
function setDatas() {
    const dataInicial = document.getElementById('data-inicial');
    const data = new Date().toLocaleString('pt-br', {timeZone: 'America/Sao_Paulo'}).split(' ')[0].split('/')
    let dataFormatada = data.reverse().join('-')
    dataInicial.value = dataFormatada;
    dataInicial.disabled = true;

    const dataFinal = document.getElementById('data-final');
    dataFinal.min = dataFormatada;

    //Preenchimento automático da data final para hoje
    dataFinal.value = dataFormatada;
}

// Validação do campo descrição
function validaDescricao() {
    const text = document.getElementById("descricao").value
    if(text == null || text == undefined ||text.length < 10)
        return false;
    else
        return true;
}

// Validação do campo data final
function validaDataFinal() {
    let data = new Date().toLocaleString('pt-br', {timeZone: 'America/Sao_Paulo'}).split(' ')[0].split('/')
    data = data.reverse()
    const dtfinal = document.getElementById('data-final').value.split('-')
    if(dtfinal == undefined || dtfinal == null){
        return false
    }

    for (i=0; i<data.length; i++){
        if(Number(data[i]) > Number(dtfinal[i]))
            return false
    }
        return true;
}

// Classe para instanciação de objetos 'tarefas'
function Task(dataIncio, dataTermino, descricao){
    this.dataInicio = dataIncio;
    this.dataTermino = dataTermino;
    this.descricao = descricao;
    this.checked = false;
}

// Salva a nova tarefa no localstorage
function saveTask(){

    const dataInicio = document.getElementById("data-inicial").value;
    const dataFinal = document.getElementById("data-final").value;
    const desrcricao = document.getElementById("descricao").value;

    const user = window.sessionStorage.getItem("user");
    let tasks = window.localStorage.getItem(`tasks-${user}`);

    if(tasks == null || tasks == undefined || tasks == '' || tasks.length == 0){
        tasks = JSON.stringify([]);
        window.localStorage.setItem(`tasks-${user}` , tasks);
    }

    tasks = JSON.parse(tasks);

    task = new Task(dataInicio, dataFinal, desrcricao);

    tasks.unshift(task);
    window.localStorage.setItem(`tasks-${user}`, JSON.stringify(tasks));

    alert("Nova tarefa criada com sucesso!");

}


// Renderiza os cards com as tarefas
function renderTaskCards(){

    const user = window.sessionStorage.getItem("user");
    
    const cardsCountainer = document.getElementById("card-container");
    let tasks = window.localStorage.getItem(`tasks-${user}`);
    tasks = JSON.parse(tasks);
    
    if(tasks == null || tasks == undefined || tasks == '' || tasks.length == 0){
        cardsCountainer.innerHTML = "";
        const warning = document.createElement("p");
        warning.innerHTML = "Ainda não há tarefas";
        cardsCountainer.appendChild(warning);
    }
    else {

        cardsCountainer.innerHTML = ""

        const clearButton = document.createElement("button");
        clearButton.innerHTML = "LIMPAR TAREFAS";
        clearButton.id = 'clear-button';

        // Limpa a lista de tarefas do usuário logado
        clearButton.onclick = () => {
            window.localStorage.removeItem(`tasks-${user}`);
            renderTaskCards();
        };


        cardsCountainer.appendChild(clearButton);
        tasks.forEach( (task, index) => {


            // Card de tarefas
            const taskCard = document.createElement("div");
            taskCard.classList = "task-card tipografy";
            taskCard.id = index;
            cardsCountainer.appendChild(taskCard);
            
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = task.checked;
            
            
            const descricao = document.createElement("p");
            descricao.classList = "task-description"
            descricao.innerHTML = task.descricao;
            
            const dataInicial = document.createElement("div");
            dataInicial.innerHTML = `Data inicial: ${task.dataInicio}`;
            dataInicial.classList = "data tipografy"
            dataFinal = document.createElement("div");
            dataFinal.innerHTML = `Termino: ${task.dataInicio}`;
            dataFinal.classList = "data tipografy"
            
            const datasCountainer = document.createElement("div");
            datasCountainer.classList = "datas-countainer tipografy"
            datasCountainer.appendChild(dataInicial);
            datasCountainer.appendChild(dataFinal);
            
            const contentCuntttaner = document.createElement("div");
            contentCuntttaner.classList = "content-task tipografy";
            contentCuntttaner.appendChild(descricao);
            contentCuntttaner.appendChild(datasCountainer);
            
            const lixeira = document.createElement('img');
            lixeira.classList = "lixeira"
            lixeira.src = "../assets/svg/lixeira.svg"
            

            taskCard.appendChild(checkbox);
            taskCard.appendChild(contentCuntttaner);
            taskCard.appendChild(lixeira);
            
            
            
        });
        

        // Remove uma tarefa ao clicar na lixeira
        const taskCardsCountainer = document.getElementById("card-container");
        document.querySelectorAll(".lixeira").forEach( lixeira => {
            lixeira.onclick = () => {
                const user = window.sessionStorage.getItem("user");
                let task = lixeira.parentNode;
                const id = task.id;
                let tasks = window.localStorage.getItem(`tasks-${user}`);

                tasks = JSON.parse(tasks);
                tasks.splice(id, 1);
                tasks = JSON.stringify(tasks);
                window.localStorage.setItem(`tasks-${user}`, tasks);

                renderTaskCards();
            }
        })

        const checkList = document.querySelectorAll('input[type = "checkbox"]');
        checkList.forEach( checkbox => {
            checkbox.onclick = () =>{
                const user = window.sessionStorage.getItem("user");
                let task = checkbox.parentNode;
                const id = task.id;
                let tasks = window.localStorage.getItem(`tasks-${user}`);

                tasks = JSON.parse(tasks);
                tasks[id].checked = checkbox.checked;
                tasks = JSON.stringify(tasks);
                window.localStorage.setItem(`tasks-${user}`, tasks)
            }
        })
        
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

const exitLink = document.getElementById("exit");
exitLink.onclick = exit;

const inputDataFinal = document.getElementById('data-final');
inputDataFinal.addEventListener('keypress', e => inputDataFinal.style.border = "1px solid #73B3FD90");

const inputDescricao = document.getElementById("descricao");
inputDescricao.addEventListener('keypress', e => inputDescricao.style.border = "1px solid #73B3FD90");

const botaoSalvar = document.getElementById("submit-button");
botaoSalvar.addEventListener('click', e => {
    e.preventDefault();
    const dtfinal = document.getElementById('data-final')
    const descricao = document.getElementById("descricao")

    if(!validaDataFinal()){
        dtfinal.style.border = "1px solid #db1414e6"
        alert("A data final não pode ser anterior a data de hoje!")
    } else if (!validaDescricao()) {
        alert("A descrição deve conter mais de 10 caracteres!")
        descricao.style.border = "1px solid #db1414e6"
    } else{
        saveTask();
        renderTaskCards();
    }

})
