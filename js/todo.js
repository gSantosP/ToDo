window.onload = startApp;


// Inicia a aplicalção
function startApp(){
    setDatas();
    renderTaskCards();
    renderLoadAnimation();
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
function Task(id, dataIncio, dataTermino, descricao){
    this.id = id;
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

    let tasks = window.localStorage.getItem("tasks");

    if(tasks == null || tasks == undefined || tasks == '' || tasks[1].length == 0){
        tasks = JSON.stringify([0, []]);
        window.localStorage.setItem("tasks", tasks);
    }

    tasks = JSON.parse(tasks);

    task = new Task(tasks[0], dataInicio, dataFinal, desrcricao);

    tasks[1].unshift(task);
    tasks[0]++;
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Nova tarefa criada com sucesso!");

}

// Renderiza os cards com as tarefas
function renderTaskCards(){
    
    const cardsCountainer = document.getElementById("card-container");
    let tasks = window.localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);
    
    if(tasks == null || tasks == undefined || tasks == '' || tasks[1].length == 0){
        const warning = document.createElement("p");
        warning.innerHTML = "Ainda não há tarefas";
        cardsCountainer.appendChild(warning);
    }
    else {

        cardsCountainer.innerHTML = ""

        const clearButton = document.createElement("button");
        clearButton.innerHTML = "LIMPAR TAREFAS";
        clearButton.id = 'clear-button';
        cardsCountainer.appendChild(clearButton);
        tasks[1].forEach( task => {


            // Card de tarefas
            const taskCard = document.createElement("div");
            taskCard.classList = "task-card";
            cardsCountainer.appendChild(taskCard);
            
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = task.checked;
            
            
            const descricao = document.createElement("p");
            descricao.classList = "task-description"
            descricao.innerHTML = task.descricao;
            
            const dataInicial = document.createElement("div");
            dataInicial.innerHTML = `Data inicial: ${task.dataInicio}`;
            dataInicial.classList = "data"
            dataFinal = document.createElement("div");
            dataFinal.innerHTML = `Data inicial: ${task.dataInicio}`;
            dataFinal.classList = "data"
            
            const datasCountainer = document.createElement("div");
            datasCountainer.classList = "datas-countainer"
            datasCountainer.appendChild(dataInicial);
            datasCountainer.appendChild(dataFinal);
            
            const contentCuntttaner = document.createElement("div");
            contentCuntttaner.classList = "content-task";
            contentCuntttaner.appendChild(descricao);
            contentCuntttaner.appendChild(datasCountainer);
            
            const lixeira = document.createElement('img');
            lixeira.classList = "lixeira"
            lixeira.src = "../assets/svg/lixeira.svg"
            

            taskCard.appendChild(checkbox);
            taskCard.appendChild(contentCuntttaner);
            taskCard.appendChild(lixeira);
            
            
            
        });
        

        const taskCardsCountainer = document.getElementById("card-container");
        document.querySelectorAll(".lixeira").forEach( l => {
            l.onclick = () => taskCardsCountainer.removeChild(l.parentNode)
        })
        
    }
    
    
}

const inputDataFinal = document.getElementById('data-final');
inputDataFinal.addEventListener('keypress', e => inputDataFinal.style.border = "none");

const inputDescricao = document.getElementById("descricao");
inputDescricao.addEventListener('keypress', e => inputDescricao.style.border = "none");

const botaoSalvar = document.getElementById("botaoSalvar");
botaoSalvar.addEventListener('click', e => {
    e.preventDefault();
    const dtfinal = document.getElementById('data-final')
    const descricao = document.getElementById("descricao")

    if(!validaDataFinal()){
        dtfinal.style.border = "2px solid red"
       // alert("A data deve ser maior ou igual a hoje!")
        alert("A data final não pode ser anterior a data de hoje!")
    } else if (!validaDescricao()) {
        alert("A descrição deve conter mais de 10 caracteres!")
        descricao.style.border = "2px solid red"
    } else{
        saveTask();
        renderTaskCards();
    }

})
