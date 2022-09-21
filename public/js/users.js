window.addEventListener("load", () => {
    // //Validaciones Login

    let form = document.querySelector('.form-login')
    let formRegister = document.querySelector('.form-register')


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
            errores.push("La contraseña debe tener al menos 5 caractares")
        }

        if (errores.length > 0) {
            e.preventDefault()
            for (let i = 0; i < errores.length; i++) {
                erroresLogin.innerHTML += "<li>" + errores[i] + "</li>"

            }
        }
    })




    //Validaciones Register
    formRegister.addEventListener('submit', (e) => {
        let nameReg = document.querySelector('.input-name')
        let lastNameReg = document.querySelector('.input-lastName')
        let passwordReg = document.querySelector('.input-password')
        let emailReg = document.querySelector('.input-email')
        let imageReg = document.querySelector('.input-image')
        let erroresLogin = document.querySelector("div.errores-login ul")
        erroresLogin.innerHTML = ' '
        erroresLogin.style.color = 'red'
        let errores = []


        if (nameReg.value == "" || nameReg.value.length < 2) {
            errores.push("Por favor ingrese un nombre valido");
        }

        if (lastNameReg.value == "" || lastNameReg.value.length < 2) {
            errores.push("Por favor ingrese un apellido valido");
        }

        if (passwordReg.value == "" || passwordReg.value.length < 8) {
            errores.push("Por favor ingrese una contraseña valida");
        }

        if (imageReg.value == "" || !imageReg.value.toLowerCase().endsWith("jpg") || !imageReg.value.toLowerCase().endsWith("jpeg") || !imageReg.value.toLowerCase().endsWith("png") || !imageReg.value.toLowerCase().endsWith("gif")) {
            errores.push("Por favor ingrese una imagen valida");
        }

        if (errores.length > 0) {
            e.preventDefault()
            for (let i = 0; i < errores.length; i++) {
                erroresLogin.innerHTML += "<li>" + errores[i] + "</li>"

            }
        }
    })
})

