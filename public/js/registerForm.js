window.addEventListener("load", function(){

  let formulario = document.querySelector("form.login-container")

  formulario.addEventListener ("submit", function(e){
 
    e.preventDefault();
    
    let errores = []

    let campoEmail = document.querySelector("input.email");
    let campoPassword = document.querySelector("input.password");
    
    if (campoEmail.value == "") {
      errores.push("¡El campo email debe estar completo!")
    }

    if (campoPassword.value == "") {
      errores.push("¡El campo password debe estar completo!")
    }


    if (errores.length >0 ){
      e.preventDefault();

      let ulErrores= document.querySelector("div.errores ul")
      for (let i=0; i<errores.length; i++){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    }

  })


  });
