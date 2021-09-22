window.onload = _ => {
    const inputDataInicial = document.getElementById("data-inicial");
    let hoje = new Date().toISOString().split("T")[0];
    
    inputDataInicial.value = hoje;
    inputDataInicial.disabled = true;
    
    // imitando o usuario a escolher apenas datas futuras
    const inputDataTermino = document.getElementById("data-final");
    inputDataTermino.min = hoje;
}