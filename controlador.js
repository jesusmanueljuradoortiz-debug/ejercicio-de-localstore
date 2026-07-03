//zona de codigo principal 
function hacer_bucle(){
    for(let i = 0; i<1000; i++){
        console.log(i);
    }
}

async function hacer_saludo(){
    const info = await hacer_bucle();
    console.log("hola mundo....")
}

const info_cliente = {
    "nmbre" : "jhoan",
    "apellido" : "carrillo",
    "rol" : "vendedor"
}

const boton_enviar = document.getElementById("registrar");
console.log(boton_enviar);

boton_enviar.addEventListener("click", ()=>{
    const infi_storge = localStorage.getItem("cliente");
    console.log(infi_storge)

    localStorage.setItem("info_cliente", JSON.stringify(info_cliente));
    localStorage.setItem("info_token", JSON.stringify([]));
    localStorage.setItem("info_api", JSON.stringify([]));
    localStorage.setItem("info_producto", JSON.stringify([]));
   
    hacer_saludo()
    
});

