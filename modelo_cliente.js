export default class cliente {
    constructor(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    esValido() {
        return this.nombre && this.nombre.trim().length > 3 &&
            this.apellido && this.apellido.trim().length > 3;
    }
}