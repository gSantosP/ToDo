function validaDescricao() {
    const text = document.getElementById("descricao").value
    if(text == null || text == undefined ||text.length < 10)
        return false;
    else
        return true;
}

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

function toggleBorder() {
    const dtfinal = document.getElementById('data-final').style.border = "none"
    const descricao = document.getElementById("descricao").style.border = "none"
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
    }
})

const inputDataFinal = document.getElementById('data-final')
inputDataFinal.addEventListener('keypress', e => inputDataFinal.style.border = "none")

const inputDescricao = document.getElementById("descricao")
inputDescricao.addEventListener('keypress', e => inputDescricao.style.border = "none")