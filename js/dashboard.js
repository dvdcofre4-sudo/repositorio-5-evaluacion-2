// Variable principal del contador
let numero = 15;

// Capturamos elementos del HTML
const btnPresioname = document.getElementById("btnPresioname");
const numeroBoton = document.getElementById("numeroBoton");

const cardEstado = document.getElementById("cardEstado");
const cardHeader = document.getElementById("cardHeader");
const cardImagen = document.getElementById("cardImagen");
const cardTitulo = document.getElementById("cardTitulo");
const cardDescripcion = document.getElementById("cardDescripcion");
const cardFooter = document.getElementById("cardFooter");

// EventListener del botón
btnPresioname.addEventListener("click", function () {
  numero--;

  // Si llega a cero, vuelve al comienzo
  if (numero === 0) {
    numero = 15;
  }

  actualizarDashboard();
});

// Función que actualiza el botón y la card
function actualizarDashboard() {
  numeroBoton.textContent = numero;
  cardFooter.textContent = "Número actual: " + numero;

  // Estado PRIMARY: desde 15 hasta 11
  if (numero >= 11 && numero <= 15) {
    cambiarClases("primary");

    cardHeader.textContent = "Estado normal";
    cardImagen.src = "img/etapa-normal.svg";
    cardImagen.alt = "Imagen estado normal";
    cardTitulo.textContent = "Sistema en estado normal";
    cardDescripcion.textContent = "El sistema está funcionando correctamente. El contador se encuentra en una zona segura.";
  }

  // Estado WARNING: desde 10 hasta 6
  else if (numero >= 6 && numero <= 10) {
    cambiarClases("warning");

    cardHeader.textContent = "Estado de advertencia";
    cardImagen.src = "img/etapa-alerta.svg";
    cardImagen.alt = "Imagen estado de advertencia";
    cardTitulo.textContent = "Sistema en estado de alerta";
    cardDescripcion.textContent = "El contador bajó a una zona intermedia. Se recomienda prestar atención al estado del sistema.";
  }

  // Estado DANGER: desde 5 hasta 1
  else if (numero >= 1 && numero <= 5) {
    cambiarClases("danger");

    cardHeader.textContent = "Estado crítico";
    cardImagen.src = "img/etapa-peligro.svg";
    cardImagen.alt = "Imagen estado de peligro";
    cardTitulo.textContent = "Sistema en estado de peligro";
    cardDescripcion.textContent = "El contador está en una zona crítica. El sistema debe reiniciarse al llegar al final.";
  }
}

// Función para cambiar las clases del botón y de la card
function cambiarClases(tipo) {
  // Limpiar clases anteriores del botón
  btnPresioname.classList.remove("btn-primary", "btn-warning", "btn-danger");

  // Limpiar clases anteriores de la card
  cardEstado.classList.remove("text-bg-primary", "text-bg-warning", "text-bg-danger");

  // Agregar nueva clase al botón
  btnPresioname.classList.add("btn-" + tipo);

  // Agregar nueva clase a la card
  cardEstado.classList.add("text-bg-" + tipo);
}