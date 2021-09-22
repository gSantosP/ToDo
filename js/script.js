
window.onload = () =>{
    const dataInicial = document.getElementById('data-inicial');
    const hoje = new Date().toISOString().split('T')[0]
    dataInicial.value = hoje;
    dataInicial.disabled = true;

    const dataFinal = document.getElementById('data-final');
    dataFinal.min = hoje;
}
