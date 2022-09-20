window.addEventListener("load",() => {
// //Validaciones Login

let form = document.querySelector ('.form-login')
let nameLogin = document.querySelector('.input-text')
let passwordLogin = document.querySelector ('.input-password')
let erroresLogin = document.querySelector("div.errores-login ul")
let errores = []

    form.addEventListener('submit', (e) => {
        
        if(nameLogin.value == ""){
            errores.push("Por favor ingrese su email")
        }

        if(passwordLogin.value == ""){
            errores.push("Por favor ingrese su contraseña")
        }
        
        if(errores.length > 0){ 
            e.preventDefault()
            for(let i = 0; i < errores.length; i++){
                erroresLogin.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }
    })
    erroresLogin.style.color = 'red'
    


//Validaciones Register
})

