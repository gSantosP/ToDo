const promise = fetch('https://jsonplaceholder.typicode.com/todos/');

promise.then((resposta) => {
    resposta.json().then((dados) => {
        dados.forEach(function(item){
            console.log(item.title)
            let sectionCards = document.querySelector('#card-container');

            /* Criando a Div para gerar os cards */
            let divTasks = document.createElement('div');
            divTasks.setAttribute("class","card-task");
            /* Criando os elementos que compoem a div:
            * Status da tarefa
            * Título da tarefa
            * ID */
            let statusTask = document.createElement('p');
            let textStatus = document.createTextNode(item.completed);
            statusTask.setAttribute("class","status-task");
            statusTask.appendChild(textStatus);

            let titleTask = document.createElement('h2');
            let textTitle = document.createTextNode(item.title);
            titleTask.setAttribute("class","title-task");
            titleTask.appendChild(textTitle);

            let idTask = document.createElement('p');
            let textId = document.createTextNode(item.id);
            idTask.setAttribute("class","id-task");
            idTask.appendChild(textId);

            divTasks.appendChild(statusTask);
            divTasks.appendChild(titleTask);
            divTasks.appendChild(idTask);


            sectionCards.appendChild(divTasks);
        })
    })
}).catch((erro) => {
    console.log("Ocorreu um erro: ",erro);
})