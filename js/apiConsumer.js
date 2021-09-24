
window.onload = renderLoadAnimation


let dadosArray = [];
async function criarTasks() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((resposta) => resposta.json())
        .then(dados => {
            dados.forEach(element => {
                dadosArray.push(element);
            });
        });

    dadosArray.forEach(function (item) {
        let sectionCards = document.querySelector('#card-container');

        /* Criando a Div para gerar os cards */
        let divTasks = document.createElement('div');
        divTasks.setAttribute("class", "card-task");
        /* Criando os elementos que compoem a div:
        * Status da tarefa
        * Título da tarefa
        * ID */

        /* Pro staus vamos utilizar um radio button */
        let statusTaskRadio = document.createElement('input');
        statusTaskRadio.setAttribute("type", "checkbox");
        statusTaskRadio.classList = "status-task";
        statusTaskRadio.checked = item.completed;


        let titleTask = document.createElement('p');
        let textTitle = document.createTextNode(item.title);
        titleTask.setAttribute("class", "title-task");
        if (item.completed) {
            titleTask.style.textDecoration = "line-through";
            titleTask.style.color = "#0006";
        } else {
            titleTask.style.fontWeight = "600";
        }

        titleTask.appendChild(textTitle);

        let idTask = document.createElement('p');
        let textId = document.createTextNode(item.id);
        idTask.setAttribute("class", "id-task");
        idTask.appendChild(textId);


        divTasks.appendChild(statusTaskRadio);
        divTasks.appendChild(titleTask);
        divTasks.appendChild(idTask);


        sectionCards.appendChild(divTasks);

        statusTaskRadio.onclick = () => {
            if (statusTaskRadio.checked) {
                titleTask.style.textDecoration = "line-through";
                titleTask.style.color = "#0006";
            } else {
                titleTask.style.textDecoration = "none";
                titleTask.style.color = "#000";
                titleTask.style.fontWeight = "600";
            }
        }
    })
}

criarTasks();