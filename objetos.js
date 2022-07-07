// document.body.style.backgroundColor = "black";
// document.body.style.color = "green";
// document.body.style.textAlign = "center";
// document.body.style.fontSize = "30px";


// const datosProductos = [
//     {
//         "id" : 1,
//         "nombre" : "Proteina",
//         "precio" : 900
//         // Imagen pendiente
//     },
//     {
//         "id" : 2,
//         "nombre" : "Creatina",
//         "precio" :  456       
//     },
//     {
//         "id" : 3,
//         "nombre" : "Cafeína",
//         "precio" : 300        
//     },
//     {
//         "id" : 4,
//         "nombre" : "BCAAS",
//         "precio" : 500        
//     },
//     {
//         "id" : 5,
//         "nombre" : "EAAS",
//         "precio" : 550        
//     },
//     {
//         "id" : 6,
//         "nombre" : "Cmusculo",
//         "precio" : 1500        
//     },
//     {
//         "id" : 7,
//         "nombre" : "Cpotencia",
//         "precio" : 1100        
//     },
//     {
//         "id" : 8,
//         "nombre" : "Cbreaker",
//         "precio" : 2000        
//     }
// ]

// const carritoFinal = [];

// function agregarCarrito(id){
//     carritoFinal.push(datosProductos[id])
//     console.log(carritoFinal);
// }
// agregarCarrito(1);

// function imprimirCarrito(id){
//     carritoFinal.push(datosProductos[id])
//     console.log(carritoFinal);
// }


// // // aqui generamos el array de suplementos 

// // const arraySuplemento = [];

// // datosProductos.forEach( (suplemento) =>{
// //     arraySuplemento.push(suplemento.nombre);
// // });
// // console.log(arraySuplemento);

// // // Ahora genero la lista de suplementos 

// // let liSuplemento = []
// // for(let suplemento of arraySuplemento){
// //     liSuplemento.push(suplemento);
// // }
// // console.log(liSuplemento);

// // // Aqui generamos en el HTML los suplementos

// // let proteina = document.createElement("u1");
// // proteina.innerHTML = `<li> ${arraySuplemento} </li>`;
// // document.body.appendChild(proteina);



// // HTML de productos y suplementos 
// for (let productos of datosProductos){
    
//     let listado = document.createElement("div");
//     listado.innerHTML = `<div class="listado">
//                             <p> Suplemento: ${productos.nombre}  /  Precio: ${productos.precio} </p>
//                             <hr>
//                         </div>`;
//     document.body.appendChild(listado);
// }


// let ventaEnPantalla = document.createElement("div");
// ventaEnPantalla.innerHTML = `<div class="ventaEnPantalla">
//                         <p> Datos de tu compra </p>
//                         <hr>
//                         <p> Nombre y dirección: (${datosUsuario.join(" / ")}) </p>
//                         <hr>
//                         <p> Productos: (${productosUsuario.join(" / ")}) </p>
//                         <hr>
//                         <p> Precios por cantidad: (${precioParcial.join(" / ")}) </p>
//                         <hr>
//                         <p> Importe total = (${precioTotal}) pesos </p>
//                         <hr>
//                     </div>`;
// document.body.appendChild(ventaEnPantalla);



const formulario = document.getElementById("form");
let datosUsuario = {}

formulario.addEventListener("submit", (e) => {

    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const confirmarDireccion = document.getElementById("confirmarDireccion").value;
    const telefono = document.getElementById("telefono").value;
   
    e.preventDefault();
    
    datosUsuario = {
        nombre,
        direccion,
        confirmarDireccion,
        telefono
    }

    console.log(datosUsuario)

    const infoUserJson = JSON.stringify(datosUsuario);
    localStorage.setItem("datosDeUsuario", infoUserJson);

    alert("Has ingresado tus datos");
})
console.log(datosUsuario)


let ventaEnPantalla = document.createElement("div");
ventaEnPantalla.innerHTML = `<div class="ventaEnPantalla">
                        <p> Datos del usuario </p>
                        <hr>
                        <p> Nombre: ${datosUsuario[0]} </p>
                        <hr>
                        <p> Dirección: ${datosUsuario[1]} </p>
                        <hr>
                        <p> Telefono: (${datosUsuario[3]}) </p>
                        <hr>
                    </div>`;
document.body.appendChild(ventaEnPantalla);
