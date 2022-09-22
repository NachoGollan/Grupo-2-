window.addEventListener("load", () => {
    let formRegister = document.getElementById('form-register')

    formRegister.addEventListener('submit', (e) => {

        let nameReg = document.getElementById('first_name')
        let lastNameReg = document.getElementById('last_name')
        let userReg = document.getElementById('user_name')
        let passwordReg = document.getElementById('password')
        let emailReg = document.getElementById('email')
        let imageReg = document.getElementById('image')
        let erroresReg = document.getElementById("divErrores")
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

        // if (imageReg.value == "" || !imageReg.value.toLowerCase().endsWith("jpg") || !imageReg.value.toLowerCase().endsWith("jpeg") || !imageReg.value.toLowerCase().endsWith("png") || !imageReg.value.toLowerCase().endsWith("gif")) {
        //     errores.push("Por favor ingrese una imagen valida");
        // }
        

        if (errores.length > 0) {
            e.preventDefault()
            for (let i = 0; i < errores.length; i++) {
                erroresReg.innerHTML += "<li>" + errores[i] + "</li>"

            }
        }
    })
})