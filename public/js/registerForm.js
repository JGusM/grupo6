window.addEventListener("load", function(){
 
  let formularioRegristro = document.querySelector("form.register-container")


  formularioRegristro.addEventListener ("submit", function(e){


    let campoFirstNameRegistro = document.querySelector("input.firstName");
    let campoLastNameRegistro = document.querySelector("input.lastName");
    let campoEmailRegistro = document.querySelector("input.email-register");
    let campoContraseñaRegistro = document.querySelector("input.contraseña-register");
    let campoConfirmacionContraseñaRegistro = document.querySelector("input.confirmar-contraseña-register");
    let campoAceptaPolitica= document.getElementById("acepta-politica").checked;
    let ulErroresRegistro= document.querySelector("div.errores-register ul")

  
   let erroresRegistro = []
    ulErroresRegistro.innerHTML = ""

    if (campoFirstNameRegistro.value == "") {
        addErrorView("¡El campo nombre debe estar completo!")
    }

    if (campoLastNameRegistro.value == "") {
        addErrorView("¡El campo apellido debe estar completo!")
    }

    if (campoEmailRegistro.value == "") {
        addErrorView("¡El campo e-mail debe estar completo!")
    }

    if (campoContraseñaRegistro.value == "") {
        addErrorView("¡El campo contraseña debe estar completo!")
    }

    if (campoConfirmacionContraseñaRegistro.value == "") {
        addErrorView("¡Debe confirmar su contraseña!")
    }

    if( campoContraseñaRegistro.value != campoConfirmacionContraseñaRegistro.value) {
      addErrorView("¡La contraseña coincidir!")
    }

    if(!campoAceptaPolitica){
      addErrorView("¡Debe aceptar política de privacidad!")
    }

    if (erroresRegistro.length >0 ){
      e.preventDefault();
    }

     function addErrorView(message){
      if(!(erroresRegistro.includes(message))){
          erroresRegistro.push(message)
          ulErroresRegistro.innerHTML += "<li>" + message + "</li>"
      }
   }

  })

  });
