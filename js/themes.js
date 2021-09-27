function setTheme(s){
    if(window.sessionStorage.getItem('theme') == 'dark'){
        darkTheme(s);
    } else if(window.sessionStorage.getItem('theme') == 'light'){
        lightTheme(s);
    } else {
        window.sessionStorage.setItem('theme', 'light');
        setTheme(s);
    }
}

function darkTheme(sinal){

    window.sessionStorage.setItem('theme', 'dark')

    document.body.style.backgroundColor = "#353535";
    document.body.style.color = "#FFF"

    const primaryBkg = document.querySelectorAll('.primary-bkg');
    primaryBkg.forEach(element => {
        element.style.backgroundColor = "#252525";
    });

    const secondaryBkg = document.querySelectorAll('.sec-bkg');
    secondaryBkg.forEach(element => {
        element.style.backgroundColor = "#333";
    });

    const tipografy = document.querySelectorAll(".tipografy");
    tipografy.forEach(element => {
        element.style.color = "#FFF"
    });
    
    const submitB = document.getElementById("submit-button")
    if(submitB != null){
        submitB.style.color = "#000";
    }
    
    const exitLink = document.getElementById("exit");
    if(exitLink != null){
        exitLink.style.color = "#73B3FD";
    }

    const colaboradores = document.getElementById("colaboradores");
    if(colaboradores!=null){
        colaboradores.style.color = "#73B3FD"
    }

    const themeButton = document.getElementById("theme-simbol");
    if(themeButton != null){
        themeButton.style.marginRight = 0;
        themeButton.style.marginLeft = "auto";
        themeButton.style.backgroundImage = "url('../assets/svg/moon-icon.svg')";
        if(sinal){
            themeButton.style.backgroundImage = "url('./assets/svg/moon-icon.svg')";
        }
    }

}

function lightTheme(sinal){

    window.sessionStorage.setItem('theme', 'light')

    document.body.style.backgroundColor = "#EEE";
    document.body.style.color = "#000"

    const primaryBkg = document.querySelectorAll('.primary-bkg');
    primaryBkg.forEach(element => {
        element.style.backgroundColor = "#FFF";
    });

    const secondaryBkg = document.querySelectorAll('.sec-bkg');
    secondaryBkg.forEach(element => {
        element.style.backgroundColor = "#EEE";
    });

    const tipografy = document.querySelectorAll(".tipografy");
    tipografy.forEach(element => {
        element.style.color = "#000"
    });

    const exitLink = document.getElementById("exit");
    if(exitLink != null){
        exitLink.style.color = "#000081";
    }


    const colaboradores = document.getElementById("colaboradores");
    if(colaboradores!=null){
        colaboradores.style.color = "#000081"
    }

    const submitB = document.getElementById("submit-button")
    if(submitB != null){
        submitB.style.color = "#FFF";
    }

    const themeButton = document.getElementById("theme-simbol");
    if(themeButton!= null){
        themeButton.style.marginLeft = "0";
        themeButton.style.marginRight = "auto";
        themeButton.style.backgroundImage = "url('../assets/svg/sun-icon.svg')";
        if(sinal){
            themeButton.style.backgroundImage = "url('../assets/svg/sun-icon.svg')";
        }
    }

}