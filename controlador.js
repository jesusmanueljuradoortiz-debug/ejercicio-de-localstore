import ModeloCliente from "./modelo_cliente.js";
import ModeloApi from "./modelo_api.js";

const boton_registrar = document.getElementById("registrar");
const modeloApi = new ModeloApi();
const saludo = document.getElementById("mensaje");
const error = document.getElementById("error");

boton_registrar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const rol = document.getElementById("rol_cliente").value;

    const nuevoCliente = new ModeloCliente(nombre, apellido, rol);

    if (nombre == "" || apellido == "") {
        error.style.color = "red";
        error.textContent = "Error: Por favor complete los campos obligatorios (nombre y apellido).";
        return;
    }

    if (!nuevoCliente.esValido()) {
        saludo.style.color = "red";
        saludo.textContent = "Error: El nombre y apellido deben tener estrictamente más de 3 caracteres.";
        return;
    }

    const resultado = modeloApi.guardar_Cliente("clientes_db", nuevoCliente);
    console.log("Resultado de la operacion:", resultado);
    console.log("Estado actual en LocalStorage:", JSON.parse(localStorage.getItem("clientes_db")));

    if (resultado.exito) {
        saludo.style.color = "green";
        saludo.textContent = resultado.mensaje;
    } else {
        saludo.style.color = "orange";
        saludo.textContent = resultado.mensaje;
    }
});