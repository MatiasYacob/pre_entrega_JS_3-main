// Función para ingresar un artículo nuevo
function ingresarArticulo() {

    const nombre = prompt('Ingrese el nombre del Articulo:').toUpperCase();

    while (true) {    //uso un while para que si o si deba ingresar informacion al la Variable 
        var stock = parseFloat(prompt('Ingrese el stock del Articulo:')); //tuve que usar VAR porque sino no me lo toma la variable "nuevoArticulo"
        if (isNaN(stock)) {
            alert("Debe Ingresar el Stock")
        }
        if (!isNaN(stock)) {
            break
        }
    }
    while (true) {
        var precioMayorista = parseFloat(prompt('Ingrese el precio mayorista del Articulo:'));
        if (isNaN(precioMayorista)) {
            alert("Debe Ingresar el Precio")
        }
        if (!isNaN(precioMayorista)) {
            break
        }
    }
    while (true) {
        var precioMinorista = parseFloat(prompt('Ingrese el precio minorista del Articulo:'));
        if (isNaN(precioMinorista)) {
            alert("Debe Ingresar el Precio")
        }
        if (!isNaN(precioMinorista)) {
            break
        }
    }


    let nuevoArticulo = new Articulo(nombre, stock, precioMayorista, precioMinorista);
    articulos.push(nuevoArticulo);
    alert('Articulo ingreasdo con exito!');
    
}

// Funcion para quitar un Articulo
function quitarArticulo() {
    if (articulos.length === 0) {
        alert('No se econtrarion articulos en la lista!');
        return;
    }

    const nombresArticulos = articulos.map(articulo => articulo.nombre);
    const quitarArticulo = prompt(`Seleccione el articulo a quitar:\n${nombresArticulos.join('\n')}`);

    const indiceArticulo = articulos.findIndex(articulo => articulo.nombre === quitarArticulo);
    if (indiceArticulo === -1) {
        alert('No se encontro el articulo en la lista');
        return;
    }

    articulos.splice(indiceArticulo, 1);
    alert(`El articulo: "${quitarArticulo}" fue removido exitosamente.`);
}

// Funcion para consultar los articulos ingresados y suma de los valores totales de la mercaderia en su respectiva categoria
function consultarArticulos() {
    if (articulos.length === 0) {
        alert('No se encontraron articulos en la lista!');
        return;
    }
    let contenido = 'Articulos agregados:\n\n';
    let sumaPrecioMayorista = 0;
    let sumaPrecioMinorista = 0;
    articulos.forEach(item => {
        contenido += item.nombre + ": Stock: " + item.stock + " Precio Mayorista: $" + item.precioMayorista + " Precio Minorista: $" + item.precioMinorista + '\n';
        sumaPrecioMayorista += item.precioMayorista * item.stock; 
        sumaPrecioMinorista += item.precioMinorista * item.stock;
    });//originalmente no sumaba estos volares solo lo puse porque no lo vi necesario pero luego de leer la consigna vi que decia que habiar que tener operaciones matematicas espero sea suficiente
    contenido += "\nSuma total del Valor de la mercaderia:\n";
    contenido += "Valor Mayorista Total: $" + sumaPrecioMayorista + '\n';
    contenido += "Valor Minorista Total: $" + sumaPrecioMinorista;
    alert(contenido);
}


