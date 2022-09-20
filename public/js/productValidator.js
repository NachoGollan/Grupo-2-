 window.addEventListener('load', () => {
    let formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (e) => {

        let inputName = document.getElementById('name')
        let inputImage = document.getElementById('image')
        let divErrores = document.getElementById('divErrores')
        divErrores.innerHTML = ' '
        let errores = []

        if ( inputName.value == ""){
            errores.push("El nombre del producto es obligatorio")
        } else if (inputName.value.length < 5 ) {
            errores.push("El nombre del producto debe tener al menos 5 caractares")
        }


        if(errores.length > 0){ 
            e.preventDefault()
            for(let i = 0; i < errores.length; i++){
                divErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }

    })

})