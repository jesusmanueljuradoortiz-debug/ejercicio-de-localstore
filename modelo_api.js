export default class modelo_Api {
    guardar_Cliente(info_Cliente, objeto_Cliente){
        const datos= localStorage.getItem(info_Cliente);
        const lista= datos ? JSON.parse(datos) : [];
        const salida = lista.some((cliente_Guardado) =>  {
            return cliente_Guardado.nombre.toLowerCase() === objeto_Cliente.nombre.toLowerCase() &&
            cliente_Guardado.apellido.toLowerCase() === objeto_Cliente.apellido.toLowerCase()
        });
        
    }
}