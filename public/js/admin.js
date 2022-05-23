const Swal = require('sweetalert2')


window.addEventListener("load", function() {

let btnDelete = document.getElementById("admin-btn-delete");

btnDelete.addEventListener("click", function(e) {
    e.preventDefault()
    Swal.fire({
    title: '¿Estás seguro/a?',
     text: "Si borrás este producto no podrás recuperarlo",
     icon: 'warning',
     showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí! Borralo!'
    }).then((result) => {
    if (result.isConfirmed) {
        deleteProduct(btnDelete.value)
    Swal.fire(
      '¡Borrado!',
      'El producto se ha borrado con éxito',
      'success'
    )
  }
})
})

 async function deleteProduct(id){
  try {
    const respuesta = await fetch("http://localhost:3001/products/" + id +"?_method=DELETE", {
      method: 'POST',
    })
    var data = await respuesta.json()
    print(data)
  } catch (error) {
      console.log(error)
   }
}


})
