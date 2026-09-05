function iniciarSesion() {
    var correo = document.getElementById("correo").value.trim();
    var clave = document.getElementById("clave").value;
    var mensaje = document.getElementById("mensaje");
    var correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    mensaje.innerText = "";
    mensaje.className = "mensaje";

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

    var correoGuardado = localStorage.getItem("correo");
    var claveGuardada = localStorage.getItem("clave");

    if (correo == correoGuardado && clave == claveGuardada) {
        localStorage.setItem("sesion", "si");
        mensaje.innerText = "Bienvenido " + localStorage.getItem("nombre");
        mensaje.className = "mensaje ok";
        alert("Inicio de sesión correcto.");
        window.location.href = "index.html";
    } else {
        mensaje.innerText = "Correo o contraseña incorrectos. Si no tienes cuenta, regístrate.";
        mensaje.className = "mensaje error";
    }

    return false;
}
