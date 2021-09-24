function autentication() {
    const user = {
        userName: document.getElementById('User'),
        pass: document.getElementById('Pass')
    }
    let users = window.localStorage.getItem("users");
    users = JSON.parse(users);

    let isValid = users.find(e => {
        return e = user
    })

        console.log(isValid);
}