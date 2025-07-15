// ibamos a crear un listado de productos(objetos)
//simulando que vienen de parte del backend

//1er paso: Creamos nuestros productos

let productos = [

    {   
        "id" : 100,
        "image" :"../media/imagenes/pasteldechoc.png",
        "name" : "Pastel de chocolate",
        "price" : 10000,
        "description" : "Porción de pastel de chocolate"
        
    },

    {
        "id" : 101,
        "image": "../media/imagenes/brownie choc.png",
        "name" : "Brownie de chocolate",
        "price" : 5000,
        "description" : "Brownie de chocolate cubierto de salsa de chocolate"


    },

    {
        "id" : 102,
        "image": "../media/imagenes/tarta de fresa.png",
        "name" : "Tarta de fresa",
        "price" : 8000,
        "description" : "Porción de tarta de fresa y crema decorada con frutos rojos frescos"
    },
    {
        "id" : 103,
        "image":"../media/imagenes/cupcake.png",
        "name" : "Cupcake de chocolate",
        "price" : 2000,
        "description" : "Cupcake de chocolate decorado con crema de chocolate y frutillas"


    },
    {
        "id" : 104,
        "image":"../media/imagenes/Torta de naranja.png",
        "name" : "Tarta de naranja",
        "price" : 10000,
        "description" : "Porción de tarta de naranja"
    },
    {
        "id" : 105,
        "image":"../media/imagenes/Mousse de choc.png",
        "name" : "Mousse de chocolate",
        "price" : 700,
        "description" : "Mousse aireada de chocolate decorado con crema y cacao"
    },
    {
        "id" : 106,
        "image":"../media/imagenes/Tiramisu.png",
        "name" : "Tiramisu",
        "price" : 1000,
        "description" : "Tiramisu"
    },
     {
        "id" : 107,
        "image":"../media/imagenes/café con leche.png",
        "name" : "Café con leche",
        "price" : 2000,
        "description" : "Taza mediana de café con leche"
    },
     {
        "id" : 108,
        "image":"../media/imagenes/batido.png",
        "name" : "Batido de varios sabores",
        "price" : 3000,
        "description" : "Batido de varios sabores. A elección"
    },
     {
        "id" : 109,
        "image":"../media/imagenes/Batido chocol y canela.png",
        "name" : "Batido de chocolate y canela",
        "price" : 4000,
        "description" : "Batido mediano de chocolate y canela"
    },
     {
        "id" : 110,
        "image":"../media/imagenes/Batido leche y matcha.png",
        "name" : "Btido de leche y matcha",
        "price" : 4000,
        "description" : "Batido mediano de leche y matcha"
    },
     {
        "id" : 111,
        "image":"../media/imagenes/pastelsirena.jpg",
        "name" : "Pastel sirena",
        "price" : 15000,
        "description" : "Pastel de vainilla decorado con temática del fondo marino"
    },
     {
        "id" : 112,
        "image":"../media/imagenes/pastelarenacaracolas.jpg",
        "name" : "Pastel caracola",
        "price" : 20000,
        "description" : "Pastel personalizado de caracolas"
    },
     {
        "id" : 113,
        "image":"../media/imagenes/pastelazul.jpg",
        "name" : "Pastel azul",
        "price" : 10000,
        "description" : "Pastel de caps degrade azul"
    }, {
        "id" : 114,
        "image":"../media/imagenes/Bebidaazul.jpg",
        "name" : "Bebida azul",
        "price" : 5000,
        "description" : "Bebida de arandanos con tiburones de caramelo"
    },
     {
        "id" : 115,
        "image":"../media/imagenes/Plato ballena.jpg",
        "name" : "Plato ballena",
        "price" : 5000,
        "description" : "Plato personalizado con ballenas"
    },
     {
        "id" : 116,
        "image":"../media/imagenes/Plato faro.jpg",
        "name" : "Plato faro",
        "price" : 5000,
        "description" : "Plato personalizado con faro"
    },
     {
        "id" : 117,
        "image":"../media/imagenes/Taza ballena.jpg",
        "name" : "Taza ballena",
        "price" : 5000,
        "description" : "Taza personalizada de ballena con detalles en oro"
    },
     {
        "id" : 118,
        "image":"../media/imagenes/Taza coladesirena.jpg",
        "name" : "Taza sirena",
        "price" : 5000,
        "description" : "Taza personalizada con cuchara cola de sirena"
    },
     {
        "id" : 119,
        "image":"../media/imagenes/Taza playa.jpg",
        "name" : "Taza playa",
        "price" : 5000,
        "description" : "Taza personalizada de playa"
    },





];

//2do paso: Mostrar nuestros productos en nuestra página o sección
// Vamos a manipular el DOM, creando nuevos elementos para
//mostrar cada producto

// Creamos una variable para seleccionar la section del html

let productosContainer = document.getElementById('productos');

// Creo un contenedor individual para cada producto
let contenedorProducto = document.createElement('div');

// Agrego una clase/estilo CSS al producto

contenedorProducto.classList.add('contenedor_producto');


//Le agregamos al documento un Listener que se dispare cuando el evento
//DOMcontentLoad finalice, dispara una función que av iterando el
//listado de productos y a los valores que va a extrayendo los
//ubica dentro de una estructura HTML
//Carga de productos

document.addEventListener("DOMContentLoaded", (event) => {
    
    productos.forEach(producto => {

        contenedorProducto.innerHTML += `

            <div class="card">
            <form id="my_form${producto.id}">
                <div>
                   <div id="imagen" name="imagen">
                       <img class="imagen" src="${producto.image}"></img>
                  </div>
                  <div id="nombre" name="nombre">${producto.name}</div>
                  <br>
                  <div id="precio" name="precio">${producto.price}$</div>
                  <br>
                  <div id="botonera${producto.id}">
                      <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
                  </div>
                  <div>
                     <div id="description${producto.id}" class="description">
                         ${producto.description}
                     </div>
                  </div>
              </div>
           </div>
        `;

        productosContainer.append(contenedorProducto);
    });
    
});

