# Projeto ToDo - Checkpoint II - Front End II
Olá, este web app ToDo (lista de coisas a fazer) tem como objetivo servir como segundo instrumento avaliativo da disciplina de Front End II e está sendo desenvolvido pelos integrandes da mesa ##:

 - [Aloisio Carvalho](https://github.com/aloisiot)
 - [Gabriel Santos](https://github.com/gSantosP)
 - [Henrique Tebet](https://github.com/HenriqueTebet)
 - [Patrícia Ruffino](https://github.com/PatriciaRuffino)
 - [Ronilson Alves](https://github.com/ronilsonalves)
 - [Samuel Xavier](https://github.com/SamuelFXavier)
 - [William Rodrigues](https://github.com/warwilliam)

## O projeto
A equipe optou por não seguir o esqueleto do HTML & CSS disponiblizado em aula pelo professor, fora criado um wirefame e trabalhamos no projeto do zero, criando nossa própria estrutura HTML e aplicando nossa própria estilização.

## Screenshot
[.](#link-das-images-vai-aqui)

## Instruções e requisitos do projeto
	
	
1. A primeira página deve ter um formulário com os inputs: 
    - a. Data de criação: o usuário não poderá alterar esse input, mas ele deve ser exibido.
    - b. Data limite da tarefa: data que o usuário deseja terminar aquela tarefa.
    - c. Descrição: texto da tarefa.
    - d. Botão de submit.


2. Validações:
    - a. Nenhum campo pode ser vazio.
    - b. A descrição deve ter mais que 10 caracteres.
    - c. <b>IMPORTANTE:</b> Quando o usuário não preencher corretamente deve ser exibido um alerta indicando que existem erros na criação da tarefa.
    - d. <b>OPCIONAL:</b> a data limite da tarefa deve ser hoje ou no futuro.


3. Funcionalidades:
    - a. Quando o usuário clicar em submit, se ele passar pela validação, a anotação deve ser exibida na tela por meio de um card.
    - b. No card da anotação deve ter um botão para excluir a anotação. Quando ele for clicado deverá ser exibido um aviso confirmando a intenção de excluir a anotação. Se o usuário confirmar a intenção de excluir, o card desta nota deve desaparecer.
    - c. Ainda no card da anotação deverá existir um checkbox que ao ser clicado faz o texto daquela anotação ficar tachado. Tarefa concluida.
    - d. <b>Opcional:</b> Escolher cor do fundo do card - (versão dark)


4. Agora nós vamos criar uma outra página, onde iremos consumir uma api de lista de tarefas.
    - a. O end-point “https://jsonplaceholder.typicode.com/todos/” responde com um JSON com 200 tarefas. Essas 200 tarefas devem ser consumidas pelo JS e renderizadas também como cards na página.
    - b. Nas tarefas onde o atributo “completed": true” o texto do atributo title deve estar tachado. Pois significa que a tarefa ja foi completada.
    - c. Nas tarefas onde o atributo “completed": false” o texto do atributo title deve estar em negrito. Pois significa que a tarefa está a fazer. 
    - d. Exiba também o conteúdo do atributo “id”.


5. ENTREGA:
    - a. Devem ser entregues os arquivos HTML5, CSS3 e Javascript do projeto via Git/Github. Você deverá enviar o link do repositório pelo Google Forms até o dia 28/09/2021 às 23h59.
