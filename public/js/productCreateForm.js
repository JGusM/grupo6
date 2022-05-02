window.addEventListener("load", function(){
 
  let formularioCreacionProducto = document.querySelector("form.admin-container")

  formularioCreacionProducto.addEventListener("submit", function(e){
  
    e.preventDefault();

    let erroresProductCreate = []

    let campoNombreProductoCreate = document.querySelector("input.nombre-producto-create");
    let campoCategoriaProductCreate= document.getElementById("categoria-create");
    let campoImagenProductCreate = document.querySelector("input.imagen-product-create");
    let campoDescripcionProductCreate = document.getElementById("description");
    /*let campoDescuentoProductCreate = document.querySelector("input.descuento-product-create");*/
    let campoPrecioProductCreate= document.querySelector("input.precio-product-create");

     console.log(campoDescripcionProductCreate)
    if (campoNombreProductoCreate.value == "") {
        console.log("hola")
      erroresProductCreate.push("¡El producto debe tener un nombre!")
    }

    if(campoCategoriaProductCreate.value==0 ||
       campoCategoriaProductCreate.value == ""){
        erroresProductCreate.push("¡Debe seleccionar una categoría!")
    }

    if (campoImagenProductCreate.value == "") {
      erroresProductCreate.push("¡Debe agregar una imagen!")
    }

    if (campoDescripcionProductCreate.value == "") {
      erroresProductCreate.push("¡Debe agragar una descripción!")
    }

    /*if (campoDescuentoProductCreate.value == "") {
      erroresProductCreate.push("¡El campo descuento debe estar completo!")
    }*/

    if (campoPrecioProductCreate.value == "") {
      erroresProductCreate.push("¡El producto debe tener un precio!")
    }

    

    if (erroresProductCreate.length >0 ){
      e.preventDefault();

      let ulerroresProductCreate= document.querySelector("div.errores-product-create ul")
      for (let i=0; i<erroresProductCreate.length; i++){
        ulerroresProductCreate.innerHTML += "<li>" + erroresProductCreate[i] + "</li>"
      }
    }

  })

  });

