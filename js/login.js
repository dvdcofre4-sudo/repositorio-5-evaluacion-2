// Usuario y contraseña guardados en memoria
const usuarioGuardado = "admin";
const passwordGuardada = "1234";

// Capturamos los elementos del HTML
const formLogin = document.getElementById("formLogin");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const mensajeLogin = document.getElementById("mensajeLogin");
const logoLogin = document.getElementById("logoLogin");

// Al botón de inicio de sesión se le agrega un eventListener
formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = inputUsuario.value.trim();
  const password = inputPassword.value.trim();

  // Validación de campos vacíos
  if (usuario === "" || password === "") {
    logoLogin.textContent = "⚠️";
    mostrarAlerta("warning", "El campo usuario o contraseña está vacío.");
    return;
  }

  // Validación correcta
  if (usuario === usuarioGuardado && password === passwordGuardada) {
    window.location.href = "dashboard.html";
  } else {
    // Validación incorrecta
    logoLogin.textContent = "❌";
    mostrarAlerta("danger", "Error en la autentificación. Usuario o contraseña incorrectos.");
  }
});

// Función para mostrar alertas de Bootstrap
function mostrarAlerta(tipo, mensaje) {
  mensajeLogin.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;
}