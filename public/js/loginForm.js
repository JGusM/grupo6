/*window.onload = function () {
  let main = document.querySelector("main");
  main.style.backgroundColor = "red";
}; */


  window.addEventListener("load", function(){

  let formulario = document.querySelector("form.login-container")
  let campoEmail = document.querySelector("input.email");
  let campoPassword = document.querySelector("input.password");
  let ulErrores= document.querySelector("div.errores ul");

  formulario.addEventListener ("submit", function(e){
     let errores = [] 
    ulErrores.innerHTML = ""
    if (campoEmail.value == "") {
      addErrorView("¡El campo email debe estar completo!")
    }

    if (campoPassword.value == "") {
       addErrorView("¡El campo password debe estar completo!")
    }
      if (errores.length > 0 ){
      e.preventDefault();
      }

   function addErrorView(message){
      if(!(errores.includes(message))){
          errores.push(message)
          ulErrores.innerHTML += "<li>" + message + "</li>"
      }
   }
  })



  });


  // ||  errores.includes("¡El campo password debe estar completo!") ==false  