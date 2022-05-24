

window.addEventListener("load", function() {

fetchearData()
async function fetchearData() {
  try {
    const respuesta = await fetch("http://localhost:3001/api/products", {
      method: 'GET',
    })
    var data = await respuesta.json()
    myProgram(data)
  } catch (error) {
      console.log(error)
   }
}


function myProgram(requestApi){
   let products = requestApi.data
  products.map(producto => {
        let btn = document.getElementById(producto.id)
        btn.addEventListener("click", function(e) {
      
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
            deleteProduct(btn.value)
        Swal.fire(
          '¡Borrado!',
          'El producto se ha borrado con éxito',
          'success'
        ).then(() => {
           window.location.reload()
        })
      }
    })
    })
})



 async function deleteProduct(id){
  try {
    const respuesta = await fetch("http://localhost:3001/products/" + id +"?_method=DELETE", {
      method: 'POST',
    })
  } catch (error) {
      console.log(error)
   }
}

}

})
