window.addEventListener("load", function(){
 
  let formularioRegristro = document.querySelector("form.register-container")


  formularioRegristro.addEventListener ("submit", function(e){
  
    let erroresRegistro = []

    let campoFirstNameRegistro = document.querySelector("input.firstName");
    let campoLastNameRegistro = document.querySelector("input.lastName");
    let campoEmailRegistro = document.querySelector("input.email-register");
    let campoContraseñaRegistro = document.querySelector("input.contraseña-register");
    let campoConfirmacionContraseñaRegistro = document.querySelector("input.confirmar-contraseña-register");
    let campoAceptaPolitica= document.getElementById("acepta-politica").checked;


    if (campoFirstNameRegistro.value == "") {
      erroresRegistro.push("¡El campo nombre debe estar completo!")
    }

    if (campoLastNameRegistro.value == "") {
      erroresRegistro.push("¡El campo apellido debe estar completo!")
    }

    if (campoEmailRegistro.value == "") {
      erroresRegistro.push("¡El campo e-mail debe estar completo!")
    }

    if (campoContraseñaRegistro.value == "") {
      erroresRegistro.push("¡El campo contraseña debe estar completo!")
    }

    if (campoConfirmacionContraseñaRegistro.value == "") {
      erroresRegistro.push("¡Debe confirmar su contraseña!")
    }

    if(!campoAceptaPolitica){
        erroresRegistro.push("¡Debe aceptar política de privacidad!")
    }

    if (erroresRegistro.length >0 ){
      e.preventDefault();

      let ulErroresRegistro= document.querySelector("div.errores-register ul")
      for (let i=0; i<erroresRegistro.length; i++){
        ulErroresRegistro.innerHTML += "<li>" + erroresRegistro[i] + "</li>"
      }
    }

  })

  });
