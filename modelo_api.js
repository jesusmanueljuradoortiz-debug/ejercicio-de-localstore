export default class modelo_Api {
    guardar_Cliente(info_Cliente, objeto_Cliente) {
        const datos = localStorage.getItem(info_Cliente);
        const lista = datos ? JSON.parse(datos) : [];
        const existe = lista.some((cliente_Guardado) => {
            return cliente_Guardado.nombre.toLowerCase() === objeto_Cliente.nombre.toLowerCase() &&
                cliente_Guardado.apellido.toLowerCase() === objeto_Cliente.apellido.toLowerCase();
        });

        if (existe) {
            return { exito: false, mensaje: "El cliente ya se encuentra registrado." };
        }


        lista.push(objeto_Cliente);
        localStorage.setItem(info_Cliente, JSON.stringify(lista));

        return { exito: true, mensaje: `¡Registro exitoso! Bienvenido, ${objeto_Cliente.nombre} ${objeto_Cliente.apellido}.` };
    }
}