var listaCarrito = document.getElementById("lista-carrito");
var resumenCarrito = document.getElementById("resumen-carrito");
var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function formatoPrecio(precio) {
    return "$" + Number(precio).toLocaleString("es-CL");
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarrito() {
    listaCarrito.innerHTML = "";

    if (carrito.length == 0) {
        var mensaje = document.createElement("p");
        mensaje.className = "carrito-vacio";
        mensaje.innerText = "Tu carrito está vacío.";
        listaCarrito.appendChild(mensaje);
        resumenCarrito.style.display = "none";
        return;
    }

    resumenCarrito.style.display = "block";
    var cantidadTotal = 0;
    var precioTotal = 0;

    carrito.forEach(function (producto, indice) {
        var subtotal = producto.precio * producto.cantidad;
        cantidadTotal += producto.cantidad;
        precioTotal += subtotal;

        var item = document.createElement("article");
        item.className = "item-carrito";

        var imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        var detalles = document.createElement("div");
        detalles.className = "detalles-carrito";

        var nombre = document.createElement("h3");
        nombre.innerText = producto.nombre;

        var precio = document.createElement("p");
        precio.innerText = "Precio unitario: " + formatoPrecio(producto.precio);

        var cantidad = document.createElement("p");
        cantidad.innerText = "Cantidad: " + producto.cantidad;

        var subtotalTexto = document.createElement("strong");
        subtotalTexto.innerText = "Subtotal: " + formatoPrecio(subtotal);

        var eliminar = document.createElement("button");
        eliminar.type = "button";
        eliminar.className = "boton boton-secundario";
        eliminar.innerText = "Eliminar";
        eliminar.addEventListener("click", function () {
            carrito.splice(indice, 1);
            guardarCarrito();
            renderizarCarrito();
        });

        detalles.appendChild(nombre);
        detalles.appendChild(precio);
        detalles.appendChild(cantidad);
        detalles.appendChild(subtotalTexto);
        detalles.appendChild(eliminar);
        item.appendChild(imagen);
        item.appendChild(detalles);
        listaCarrito.appendChild(item);
    });

    document.getElementById("cantidad-carrito").innerText = cantidadTotal;
    document.getElementById("total-carrito").innerText = formatoPrecio(precioTotal);
}

document.getElementById("vaciar-carrito").addEventListener("click", function () {
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
});

renderizarCarrito();
