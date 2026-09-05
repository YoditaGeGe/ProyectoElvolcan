function registrar() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var fecha = document.getElementById("fecha").value;
    var clave = document.getElementById("clave").value;
    var clave2 = document.getElementById("clave2").value;
    var mensaje = document.getElementById("mensaje");

    var letras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    var correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var numeros = /^[0-9]+$/;

    mensaje.innerText = "";
    mensaje.className = "mensaje";

    if (nombre == "") {
        mensaje.innerText = "El nombre es obligatorio.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (!letras.test(nombre)) {
        mensaje.innerText = "El nombre solo debe contener letras.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (apellido == "") {
        mensaje.innerText = "El apellido es obligatorio.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (!letras.test(apellido)) {
        mensaje.innerText = "El apellido solo debe contener letras.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (correo == "") {
        mensaje.innerText = "El correo es obligatorio.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (!correoOk.test(correo)) {
        mensaje.innerText = "El correo no tiene un formato válido.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (telefono == "") {
        mensaje.innerText = "El teléfono es obligatorio.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (!numeros.test(telefono)) {
        mensaje.innerText = "El teléfono solo debe contener números.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (telefono.length < 8) {
        mensaje.innerText = "El teléfono debe tener al menos 8 números.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (direccion == "") {
        mensaje.innerText = "La dirección es obligatoria.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (fecha == "") {
        mensaje.innerText = "La fecha de nacimiento es obligatoria.";
        mensaje.className = "mensaje error";
        return false;
    }

    var nacimiento = new Date(fecha + "T00:00:00");
    var hoy = new Date();
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var aunNoCumple = hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() == nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate());

    if (aunNoCumple) {
        edad--;
    }

    if (edad < 18) {
        mensaje.innerText = "Debes tener al menos 18 años para registrarte.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (clave == "") {
        mensaje.innerText = "La contraseña es obligatoria.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (clave.length < 6) {
        mensaje.innerText = "La contraseña debe tener al menos 6 caracteres.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (clave2 == "") {
        mensaje.innerText = "Debes confirmar la contraseña.";
        mensaje.className = "mensaje error";
        return false;
    }

    if (clave != clave2) {
        mensaje.innerText = "Las contraseñas no coinciden.";
        mensaje.className = "mensaje error";
        return false;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("correo", correo);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("clave", clave);

    mensaje.innerText = "Cuenta creada. Ahora puedes iniciar sesión.";
    mensaje.className = "mensaje ok";
    alert("Registro correcto. Ahora inicia sesión.");
    window.location.href = "login.html";

    return false;
}
