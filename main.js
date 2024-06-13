//Pre-Entrega #1

//La funcion saludo, muestra un mesaje de Bienvenida, y pide que se ingrese el nombre del usuario, retorna el nombre
function saludo() {
    let usuario = prompt("Bienvenido a la tienda Margaritas Crochet \nPor favor ingrese su nombre y apellido: ");
    return usuario;
}

/*
La funcion menu va a mostrar un menu de las acciones que se pueden realizar, para salir del menu se tiene que ingresar el numero 3.
*/
function menu(nombre) {
    let opcion = 0;
    let productosSeleccionados = "";
    let precioFinal = 0;//Inicializo en 0

    while (opcion != 3) { //Bucle donde se va a repetir el menu hasta que opcion sea = 3

        //La primera vez va a entrar al bucle ya que opcion es igual a 0
        opcion = parseInt(prompt("Bienvenido " + nombre + " Ingrese el numero de la accion que desea realizar:\n1-Elegir Producto\n2-Finalizar Compra\n3-Salir"));
        //Se pide que se ingrese el nuevo valor de opcion

        /*En el switch se van a utilizar las funciones elegirProducto, sumarPrecio y finalizarCompra dependiendo del caso*/
        switch (opcion) {
            case 1:
                let producto = elegirProducto(); //Producto va a ser igual al string que devuelva elegirProducto
                if (producto) { //Si producto es true
                    productosSeleccionados += producto + "\n"; //Creo una cadena de string con el producto
                    alert("Producto agregado: " + producto); //Muestro el ultimo producto agregado
                    precioFinal = sumaPrecio(producto, precioFinal); //Guardo el precio que retorna sumaPrecio
                }
                break;
            case 2:
                productosSeleccionados = finalizarCompra(productosSeleccionados, precioFinal);//finalizarCompra va a devolver los productos vacios.
                precioFinal = 0;//Vuelve el precioFinal a 0
                break;
            case 3:
                alert("Nos vemos!")//Mensaje de despedida
                break;
            default:
                alert("La opcion no es valida, intente de nuevo!");//Mensaje de error
                break;
        }
    }
}

/*elegirProducto va a retornar un string dependiendo el caso que se elija*/
function elegirProducto() {
    let opcion = 0;

    opcion = parseInt(prompt("Ingrese el numero del producto que desea:\n1-Suéter: $50.000\n2-Bufanda: $20.000\n3-Guantes: $15.000\n4-Amigurumis: $15.000\n5-Peluches: $20.000"));

    switch (opcion) {
        case 1:
            return "Sueter";
        case 2:
            return "Bufanda";
        case 3:
            return "Guantes";
        case 4:
            return "Amigurumis";
        case 5:
            return "Peluches";
        default:
            alert("Opcion no valida, intente de nuevo")
            break;
    }
}

/*
La funcion sumaPrecio recibe dos parametros, producto y precio
Uso producto para saber que producto se esta seleccionando
Uso precio, para ir acumulando los precios de cada producto seleccionado
*/
function sumaPrecio(producto, precio){

    switch(producto){
        case "Sueter":
            return precio += 50000;
        case "Bufanda":
            return precio += 20000;
        case "Guantes":
            return precio += 15000;
        case "Amigurumis":
            return precio += 15000;
        case "Peluches":
            return precio += 20000;
        default:
            alert("Opcion no valida!");
            break; 
    }
}

/*
La funcion finalizarCompra recibe dos parametros, productos y precios
Productos va a ser un string donde acumulamos todos los productos seleccionados, si no hay productos seleccionados tira un mensaje. Si hay productos seleccionados, muestra una lista de los productos seleccionados, muestro la acumulacion del precio de los productos(precioFinal)
*/
function finalizarCompra(productos,precio) {
    if (!productos) {
        alert("No se ha seleccionado ningun producto");
    } else {
        alert("Resumen de la compra: \n" + productos);
        alert("El precio final es: " + precio);
        alert("Gracias por su compra")//mensaje de finalizacion de la compra
        productos = "";//Vacio los productos seleccionados
    }

    return productos;//Devuelvo el producto vacio
}

let nombre = saludo(); //Le asigno a nombre el nombre del usuario

menu(nombre); //Llamo a la funcion menu, y le paso la variable nombre para luego usarla