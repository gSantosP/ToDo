window.onload = () => {
    renderLoadAnimation();
    /* checkUser(); */
    setTheme();
}


const themeButton = document.getElementById("theme-button");
 themeButton.onclick = () => {
     if(window.sessionStorage.getItem('theme') == 'dark'){
        window.sessionStorage.setItem('theme', 'light')
     } else if(window.sessionStorage.getItem('theme') == 'light'){
        window.sessionStorage.setItem('theme', 'dark')
    }

    setTheme();
 }