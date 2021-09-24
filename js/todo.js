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

function Task(id, dataIncio, dataTermino, descricao){
    this.id = id;
    this.dataInicio = dataIncio;
    this.dataTermino = dataTermino;
    this.descricao = descricao;
}

// Salva a nova tarefa no localstorage
function saveTask(){

    const dataInicio = document.getElementById("data-inicial").value;
    const dataFinal = document.getElementById("data-final").value;
    const desrcricao = document.getElementById("descricao").value;

    let tasks = window.localStorage.getItem("tasks");

    if(tasks == null || tasks == undefined || tasks == ''){
        tasks = JSON.stringify([0, []]);
        window.localStorage.setItem("users", tasks);
    }

    tasks = JSON.parse(tasks);

    task = new Task(tasks[0], dataInicio, dataFinal, desrcricao);

    task = JSON.stringify(task);

    tasks[1].push(task);
    tasks[0]++;
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Nova tarefa criada com sucesso!");

}

const botaoSalvar = document.getElementById("botaoSalvar");
botaoSalvar.addEventListener('click', e => {
    e.preventDefault();
    const dtfinal = document.getElementById('data-final')
    const descricao = document.getElementById("descricao")

    if(!validaDataFinal()){
        dtfinal.style.border = "2px solid red"
        alert("A data deve ser maior ou igual a hoje!")
    } else if (!validaDescricao()) {
        alert("A descrição deve ser preenchida!")
        descricao.style.border = "2px solid red"
    } else{
        saveTask();
    }

})

const inputDataFinal = document.getElementById('data-final')
inputDataFinal.addEventListener('keypress', e => inputDataFinal.style.border = "none")

const inputDescricao = document.getElementById("descricao")
inputDescricao.addEventListener('keypress', e => inputDescricao.style.border = "none")