var url = window.location.search;
var codigo = url.split("=")[1];
var precioNumero = 20000;

if (codigo == "5") {
    document.getElementById("nombre-producto").innerText = "Gas 5 kg";
    document.getElementById("descripcion-producto").innerText = "Cilindro de gas licuado de 5 kg. Ideal para departamentos o uso ocasional.";
    document.getElementById("precio-producto").innerText = "$10.000";
    document.getElementById("extra-producto").innerText = "Peso: 5 kg. Despacho en Chillán el mismo día, según horario.";
    document.getElementById("imagen-producto").src = "img/gas5kg.png";
    precioNumero = 10000;
} else if (codigo == "11") {
    document.getElementById("nombre-producto").innerText = "Gas 11 kg";
    document.getElementById("descripcion-producto").innerText = "Cilindro de gas licuado de 11 kg. El más usado en casas.";
    document.getElementById("precio-producto").innerText = "$20.000";
    document.getElementById("extra-producto").innerText = "Peso: 11 kg. Sirve para uso diario en cocina.";
    document.getElementById("imagen-producto").src = "img/gas11kg.png";
    precioNumero = 20000;
} else if (codigo == "15") {
    document.getElementById("nombre-producto").innerText = "Gas 15 kg";
    document.getElementById("descripcion-producto").innerText = "Cilindro de gas licuado de 15 kg. Rinde más para familias o negocios.";
    document.getElementById("precio-producto").innerText = "$25.000";
    document.getElementById("extra-producto").innerText = "Peso: 15 kg. Recomendado si se usa mucho gas.";
    document.getElementById("imagen-producto").src = "img/gas15kg.png";
    precioNumero = 25000;
} else {
    document.getElementById("nombre-producto").innerText = "Producto no encontrado";
    document.getElementById("descripcion-producto").innerText = "Vuelve a la página de productos y elige un cilindro.";
    document.getElementById("precio-producto").innerText = "";
    document.getElementById("extra-producto").innerText = "";
    precioNumero = 0;
}

document.getElementById("total").innerText = "Total: $" + precioNumero;

function mostrarInfo() {
    var extra = document.getElementById("info-extra");
    var boton = document.getElementById("btn-info");

    if (extra.style.display == "block") {
        extra.style.display = "none";
        boton.innerText = "Ver más información";
    } else {
        extra.style.display = "block";
        boton.innerText = "Ocultar información";
    }
}

function calcularTotal() {
    var cantidad = document.getElementById("cantidad").value;

    if (cantidad == "" || parseInt(cantidad) < 1) {
        document.getElementById("total").innerText = "Ingresa una cantidad válida.";
        return;
    }

    var total = precioNumero * parseInt(cantidad);
    document.getElementById("total").innerText = "Total: $" + total;
}

function agregarPedido() {
    var cantidad = document.getElementById("cantidad").value;

    if (cantidad == "" || parseInt(cantidad) < 1) {
        alert("Selecciona una cantidad.");
        return;
    }

    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    var productoExistente = carrito.find(function (producto) {
        return producto.codigo == codigo;
    });

    if (productoExistente) {
        productoExistente.cantidad += parseInt(cantidad);
    } else {
        carrito.push({
            codigo: codigo,
            nombre: document.getElementById("nombre-producto").innerText,
            precio: precioNumero,
            imagen: document.getElementById("imagen-producto").getAttribute("src"),
            cantidad: parseInt(cantidad)
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.href = "carrito.html";
}
