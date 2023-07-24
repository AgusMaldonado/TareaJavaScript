/*Tarea 1:
Crear un objeto con datos de usuario:
username, state, role.
Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario.*/

let user = {
    username: "NombreDeUsuario",
    state: true,
    role: "Administrador",
    
    changeState: function() {
        this.state = !this.state;
    },
    showInfo: function() {

        console.log(`Nombre de usuario: ${this.username}`);
        console.log(`Estado: ${this.state}`);
        console.log(`Rol: ${this.role}`);
    }
}

/*Tarea 2:
Crear un arreglo de objetos que contenga información de productos (por lo menos 10).
Los datos que debe almacenar cada objeto son:
-Nombre
-Detalle
-Stock
-Precio unitario
-Marca
Crear una función que muestre en pantalla una lista de los productos con nombre, detalle y precio.
Crear una función de búsqueda donde le pasemos como parámetro un termino y busque productos cuyo nombre
coincida en parte con el termino enviado como parámetro.*/

/*let products = [
    {name: 'Producto 1', detail: 'Detalle del producto 1', stock: 10, unitPrice: 100, brand: 'Marca 1'},
    {name: 'Producto 2', detail: 'Detalle del producto 2', stock: 20, unitPrice: 200, brand: 'Marca 2'},
    {name: 'Producto 3', detail: 'Detalle del producto 3', stock: 30, unitPrice: 300, brand: 'Marca 3'},
    {name: 'Producto 4', detail: 'Detalle del producto 4', stock: 40, unitPrice: 400, brand: 'Marca 4'},
    {name: 'Producto 5', detail: 'Detalle del producto 5', stock: 50, unitPrice: 500, brand: 'Marca 5'},
    {name: 'Producto 6', detail: 'Detalle del producto 6', stock: 60, unitPrice: 600, brand: 'Marca 6'},
    {name: 'Producto 7', detail: 'Detalle del producto 7', stock: 70, unitPrice: 700, brand: 'Marca 7'},
    {name: 'Producto 8', detail: 'Detalle del producto 8', stock: 80, unitPrice: 800, brand: 'Marca 8'},
    {name: 'Producto 9', detail: 'Detalle del producto 9', stock: 90, unitPrice: 900, brand: 'Marca 9'},
    {name: 'Producto10', detail:'Detalle del producto10', stock :100, unitPrice :1000, brand :'Marca10'}
];

function showProducts() {
    for (let product of products) {
        console.log(`Nombre del producto:${product.name}`);
        console.log(`Detalle:${product.detail}`);
        console.log(`Precio:${product.unitPrice}`);
    }
}

function searchProducts(term) {
    let results = products.filter(product => product.name.includes(term));
    return results;
}*/


//Corrección
let productos = [
    {
      nombre: "Ipad",
      detalle: "Tablet de Apple",
      stock: 10,
      precio: 200,
      marca: "Apple",
    },
    {
      nombre: "Iphone",
      detalle: "Teléfono inteligente de Apple",
      stock: 50,
      precio: 350,
      marca: "Apple",
    },
  
    {
      nombre: "MacBook",
      detalle: "Notebook de Apple",
      stock: 20,
      precio: 500,
      marca: "Apple",
    },
  
    {
      nombre: "Ipen",
      detalle: "Lapiz de Apple",
      stock: 10,
      precio: 250,
      marca: "Apple",
    },
  ];
  
  const listProd = (array = productos) => {
    document.write("Lista de productos<br>");
    document.write("-------------------<br>");
    document.write("<ol>");
    array.forEach(function (producto) {
      document.write(`<li>
          Producto: ${producto.nombre}
          <ul>
          <li>Detalle: ${producto.detalle}</li>
          <li>Precio: $${producto.precio}</li>
          </ul>
          </li>`);
    });
    document.write("</ol>");
  };
  
  //termino => 'h' 'ma', 'pad'
  const searchProd = (termino) => {
    //entrar al arreglo, recorrer objeto por objeto y comparar el nombre del producto con el termino. Si parte o todo el nombre contiene ese termino mostrarlo
  
    let productosEncontrados = productos.filter(function (producto) {
      return producto.nombre.toLowerCase().includes(termino.toLowerCase()); //pad
    });
  
    listProd(productosEncontrados);
  };