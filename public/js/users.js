window.addEventListener("load", () => {
    // //Validaciones Login

    let form = document.querySelector('.form-login')
    form.addEventListener('submit', (e) => {
        let nameLogin = document.querySelector('.input-text')
        let passwordLogin = document.querySelector('.input-password')
        let erroresLogin = document.querySelector("div.errores-login ul")
        erroresLogin.innerHTML = ' '
        erroresLogin.style.color = 'red'
        let errores = []


        if (nameLogin.value == "") {
            errores.push("Por favor ingrese su email")
        }

        if (passwordLogin.value == "") {
            errores.push("Por favor ingrese su contraseña")
        } else if (passwordLogin.value.length < 4) {
            errores.push("La contraseña debe tener al menos 5 caracteres")
        }

        if (errores.length > 0) {
            e.preventDefault()
            for (let i = 0; i < errores.length; i++) {
                erroresLogin.innerHTML += "<li>" + errores[i] + "</li>"

            }
        }
    })
})

