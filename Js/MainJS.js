// El Array de Productos que está compuesto por los Artículos (objetos) y sus propiedades para trabajar en este código.
const productos = [
    {
        nombre: "Motorlimp",
        id: 1,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_939622-MLA45093649221_032021-V.webp",
        precio: 6500
    },
    {
        nombre: "Revividor Verde",
        id: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_794314-MLA32387441111_102019-V.webp",
        precio: 7000
    },
    {
        nombre: "Silicona Interior",
        id: 3,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_947204-MLA44623975675_012021-V.webp",
        precio: 8000
    }
];

// Array vacío para el carrito
let carrito = [];
// El "contenidoCard" lo voy a estar usando para mostrar en pantalla tanto los Artículos como el carrito
let contenidoCard = "";


//Funcion de Render principal que muestra los Articulos utilizando un innerHTML (uso de evento de usuario "onClick" y DOM)
function renderMain() {
    productos.forEach(articulo => {
        contenidoCard += `
        <div class="card text-center border  border-2">
            <img src="${articulo.imagen}" class="card-img-top" alt="${articulo.nombre}">
            <div class="card-body">
                <p class="card-text text-danger"><b>$${articulo.precio}</b></p>
                <p>${articulo.nombre}</p>
                <p><button class="btn btn-primary" onClick="agregarAlCarrito('${articulo.nombre}');">Agregar Al Carro</button></p>
            </div>
        </div>
    `;
    });
}
//Funcion para Agregar Articulos al Carrito (uso de Local Storage y JSON)
function agregarAlCarrito(nombre) {
    let producto = productos.find(item => item.nombre === nombre);

    if (producto) {
        carrito.push(producto);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
        console.log("Producto agregado al carrito:", producto.nombre);
    }
}
//Funcion para mostrar en pantalla una lista con los Articulos cargados al carrito.
function renderCarrito() {
    let contenidoCard = "";
    carrito.forEach(articulo => {
        contenidoCard += `
            <div class="alert alert-success text-center" role="alert"> <p>${articulo.nombre}</p><p><b>$${articulo.precio}</b></p>  
            </div>
        `;
    });
   

    let totalCarrito = calcularTotalCarrito();
    console.log("Total del carrito:", totalCarrito);
    // Asigno el contenido del Card para mostrarlo en pantalla, en este caso con el contenido del Carrito.
    document.getElementById("contenido").innerHTML = contenidoCard;
    
    // Quitar la clase "container" del div "contenido" esto es para que deje de tener "Display: flex;"" y se agrupen en columna.
    let div = document.getElementById("contenido");
    div.classList.remove("container");
    
    // Mostrar el total del carrito y le quito la class "displayNone" para que ahora si se muestre (estaba oculto)
    let divTotal = document.getElementById("total");
    divTotal.classList.remove("displayNone");
    document.getElementById("total").innerHTML = `<p>Total a Pagar: $${totalCarrito}</p>`;
}


// Ejecuto la funcion del Render Principal
renderMain();

//Asigno el contenido del Card para mostrarlo en pantalla, en este caso la lista de articulos que se pueden agregar al carrito.
document.getElementById("contenido").innerHTML = contenidoCard;

//Funcion que borra el local storage, vacia el array de carrito y recarga la pagina.
function borrarCarrito() {
    localStorage.clear();
    carrito = [];
    recargarPagina();
}
//funcion para recargar la pagina.
function recargarPagina() {
    location.reload();
}
//funcion del calculo para sumar el total del carrito.
function calcularTotalCarrito() {
    let total = carrito.reduce((acumulador, articulo) => {
        return acumulador + articulo.precio;
    }, 0);

    return total;
}
