window.addEventListener("load", function(){

  let formularioCreacionProducto = document.querySelector("form.admin-container")


  formularioCreacionProducto.addEventListener("submit", function(e){
   


    let campoNombreProductoCreate = document.querySelector("input.nombre-producto-create");
    let campoCategoriaProductCreate= document.getElementById("categoria-create");
    let campoImagenProductCreate = document.querySelector("input.imagen-product-create");
    let campoDescripcionProductCreate = document.getElementById("description");
    /*let campoDescuentoProductCreate = document.querySelector("input.descuento-product-create");*/
    let campoPrecioProductCreate= document.querySelector("input.precio-product-create");
    let  ulerroresProductCreate= document.querySelector("div.errores-product-create ul")
   
    let erroresProductCreate = []
    ulerroresProductCreate.innerHTML = ""
    if (campoNombreProductoCreate.value == "") {
      addErrorView("¡El producto debe tener un nombre!")
    }

    if(campoCategoriaProductCreate.value==0 ||
       campoCategoriaProductCreate.value == ""){
      addErrorView("¡Debe seleccionar una categoría!")
    }

    if (campoImagenProductCreate.value == "") {
       addErrorView("¡Debe agregar una imagen!")
    }

    if (campoDescripcionProductCreate.value == "") {
      addErrorView("¡Debe agragar una descripción!")
    }

    /*if (campoDescuentoProductCreate.value == "") {
      erroresProductCreate.push("¡El campo descuento debe estar completo!")
    }*/

    if (campoPrecioProductCreate.value == "") {
       addErrorView("¡El producto debe tener un precio!")
    }
    if (erroresProductCreate.length >0 ){
     e.preventDefault();
    }

     function addErrorView(message){
      if(!(erroresProductCreate.includes(message))){
          erroresProductCreate.push(message)
          ulerroresProductCreate.innerHTML += "<li>" + message + "</li>"
      }
   }
  })

  });

