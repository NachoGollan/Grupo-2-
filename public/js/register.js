window.addEventListener("load", () => {
    let formRegister = document.querySelector('.form-register')
    console.log (formRegister)

    formRegister.addEventListener('submit', (e) => {
        console.log ("Entro al evento")
        let nameReg = document.querySelector('.first_name')
        let lastNameReg = document.querySelector('.last_name')
        let userReg = document.querySelector('.user_name')
        let passwordReg = document.querySelector('.password')
        let emailReg = document.querySelector('.email')
        let imageReg = document.querySelector('.image')
        let erroresReg = document.querySelector("div.errores-login ul")
        erroresReg.innerHTML = ''
        erroresReg.style.color = 'red'
        let errores = []


        if (nameReg.value == "" || nameReg.value.length < 2) {
            errores.push("Por favor ingrese un nombre valido");
        }

        if (lastNameReg.value == "" || lastNameReg.value.length < 2) {
            errores.push("Por favor ingrese un apellido valido");
        }

        if (userReg.value == "" || userReg.value.length < 2) {
            errores.push("Por favor ingrese un usuario valido");
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
                erroresReg.innerHTML += "<li>" + errores[i] + "</li>"

            }
        }
    })
})