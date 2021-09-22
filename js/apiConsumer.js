fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((request) => request.json())
    .then(dados => console.log(dados))