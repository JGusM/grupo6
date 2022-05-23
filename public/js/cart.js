window.addEventListener("load", function(){

var notyf = new Notyf()
let btn = document.getElementById("btnAddProduct")
let btnSumar = document.getElementById("+")
let btnRestar = document.getElementById("-")
let cotainerContador = document.getElementById("containerContadorDisplay")
let carrito = []

let pageCart = document.getElementById("cart-page")
let pageProduct =  document.getElementById("product-page")

let precio = document.getElementById("producPrecie")


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

fetchearData()

function  myProgram(requestApi) {
 let products = requestApi.data

 if(pageProduct){
       if (localStorage.getItem('carrito')) {
             carrito = JSON.parse(localStorage.getItem('carrito'))      
        }
        btn.addEventListener("click", function() {
    let nameProduct = document.getElementById("productName").innerText
        let foundProduct = products.find(product => nameProduct === product.name)

         productoDatos = {
         name: foundProduct.name,
         id: foundProduct.id,
         image: foundProduct.image,
         price: foundProduct.price,
         cantidad: 1,
         total: foundProduct.price,
       }

        saveCartData(productoDatos)

    });

    function saveCartData(productoDatos){
    let productoRepetido = carrito.some(producto => producto.name === productoDatos.name)

     if (productoRepetido){
         carrito.map(producto => {
             
             if (producto.name === productoDatos.name) {
                 producto.cantidad++                        
                 producto.total =  producto.price * producto.cantidad
                contador.innerText = `${producto.cantidad}`
                 return producto
            }
           })
             cotainerContador.style.display = "block"
             localStorage.setItem('carrito' , JSON.stringify(carrito))
        } else {
            carrito.push(productoDatos)
            localStorage.setItem('carrito' , JSON.stringify(carrito))

             cotainerContador.style.display = "block"
             console.log(cotainerContador)
        }
     notyf.success('Producto Agregado');

    }
    
      btnSumar.addEventListener("click", (e) => {  
              let nameProduct = document.getElementById("productName").innerText
   
          carrito.map(producto => {    
            if (producto.name === nameProduct) {
                producto.cantidad++ 
                contador.innerText = `${producto.cantidad}`
                producto.total =  producto.price  * producto.cantidad
                precio.innerText = `$ ${producto.total}`
                return  producto
            }
          })
           localStorage.setItem('carrito' , JSON.stringify(carrito))
        })

        btnRestar.addEventListener("click", (e) => {
            let nameProduct = document.getElementById("productName").innerText

            carrito.map(producto => {
            
              if (producto.name === nameProduct) {
                if (producto.cantidad > 1) {
                     
                  producto.cantidad = producto.cantidad - 1
                  contador.innerText = `${producto.cantidad}`
                 
                  producto.total = producto.total -  producto.price
                  
                  precio.innerText = `$${producto.total}`
                  return producto
                } else {
                  carrito = carrito.filter(producto => producto.name !==  nameProduct)
                  cotainerContador.style.display = "none"
              }
              }
             
            })

             localStorage.setItem('carrito' , JSON.stringify(carrito))
        })
 }

 if (pageCart){
  cartItems()
    function cartItems(){

        if (localStorage.getItem('carrito')) {
             carrito = JSON.parse(localStorage.getItem('carrito'))      
        }
      document.getElementById("containerCarrito").innerHTML =""
         carrito.map(producto => {

           let contenedorProducto = document.createElement('div')
           contenedorProducto.classList = "producto_individual"

           contenedorProducto.innerHTML = `
               <div class="cart-image-description-container">
               <img src="../images/products/${producto.image}" alt="" class="cart-product-img">
               
                <div class="cart-description-cantindad-container">
                    <button id="B${producto.id}" class="cart-btn-delete">X</button>
                  <h2 class="cart-h2">${producto.name}</h2>
                  
                <div class="product-container-buttons-total">
                   <button id="-${producto.id}" class="minus-btn" type="button" name="button"><i class="fas fa-minus"></i></button>
                    <p id="D-${producto.id}" class="mas-menos-input">${producto.cantidad} </p>
                    <button id="+${producto.id}" class="plus-btn" type="button" name="button"><i class="fas fa-plus"></i></button>
                     </p>
                </div>
                  <p id="P-${producto.price}" class="cart-precio">$${producto.total}</p> 
                </div>
            </div>

           `
           document.getElementById("containerCarrito").appendChild(contenedorProducto)

            let botonBorrar = document.getElementById("B"+producto.id)
            let btnSumar = document.getElementById("+" + producto.id)
            let btnRestar = document.getElementById("-" + producto.id)
            let contador = document.getElementById("D-" + producto.id)
            let precio = document.getElementById("P-" + producto.price)
      
             borrarProducto(botonBorrar)
             sumarRestar(btnSumar, btnRestar, contador, precio)
             console.log("entro")
        
        })

        totalCarrito()
    }

    function borrarProducto(btnBorrar){
        btnBorrar.addEventListener("click", (e) => {
            let idProducto = e.target.parentElement.querySelector("button").getAttribute("id")
       
             carrito = carrito.filter(producto => "B" + producto.id !== idProducto)
       
            localStorage.setItem('carrito' , JSON.stringify(carrito))
            cartItems()
       })
        }

    function sumarRestar(sumar, restar, contador , precio) {
       
      sumar.addEventListener("click", (e) => {
            let nombreProducto = e.target.parentElement.parentElement.parentElement.querySelector("h2").textContent
          carrito.map(producto => {
                 
            if (producto.name === nombreProducto) {
                
                 producto.cantidad++ 
                 contador.innerText = `${producto.cantidad}`
                 producto.total =  producto.price * producto.cantidad
                 precio.innerText= `$${producto.total }`
                 
                return  producto
            
             }

          })
          totalCarrito()
        })

        restar.addEventListener("click", (e) => {

         let nombreProducto = e.target.parentElement.parentElement.parentElement.querySelector("h2").textContent

            carrito.map(producto => {
            
              if (producto.name === nombreProducto) {
                if (producto.cantidad > 1) {
                     
                  producto.cantidad = producto.cantidad - 1
                  contador.innerText = `${producto.cantidad}`
                  producto.total = producto.total - producto.price
                  precio.innerText = `$${producto.total}`
                  
                } else {
                  carrito = carrito.filter(producto => producto.name !==  nombreProducto)
                  localStorage.setItem('carrito' , JSON.stringify(carrito))
                     cartItems()      
              }
              }
             
            })
            totalCarrito()
        })
      }

      function totalCarrito(){
          let carritoVacio = document.getElementById("cart-h1-carrito-vacio")
          let totalCarrito = document.getElementById("containerTotalPrice")
          let total = document.getElementById("totalCarrito")
         console.log(carrito)
          if(carrito.length < 1 ){
              totalCarrito.style.display = "none"
              carritoVacio.style.display = "block"
          }else{
              
                 let totalPrecio = [] 

               carrito.map(producto =>  totalPrecio.push(producto.total))
               let sumaTotalProductos =  totalPrecio.reduce((acumulador, precio) => {
         
                return   acumulador + precio
 
                 }, 0)
              total.innerText = `$${sumaTotalProductos}`
          }

      }
 }

}})