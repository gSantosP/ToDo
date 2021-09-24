
window.onload = () =>{
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


