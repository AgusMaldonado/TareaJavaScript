//Punto 4 -Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
function numeroPar(numero) {
    if (numero % 2 === 0) {
      return "es par";
    } else {
      return "es impar";
    }
  }
  
  let num = parseInt(prompt("Ingrese un número"));
  document.write(`El número ${num} ${numeroPar(num)}`);

//Punto 5 -Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
function informacion(cadena){
    if(cadena === cadena.toUpperCase()){
        return 'completamente en mayúsculas';
    }else if(cadena === cadena.toLowerCase()){
        return 'completamente en minúsculas';
    }else{
        return 'con mayúsculas y minúsculas';
    }
}

let cadena=prompt("Ingrese una texto para analizar");
document.write(`El texto ingresado esta escrito ${informacion(cadena)}`);

//Punto 6 -Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

//Ejemplo:

//Input:
//lado A = 24
//lado B = 5

//Output: 58

const perimetroRectangulo=(lado1, lado2)=>{
    return 2*(lado1+lado2);
}

let lado1=parseFloat(prompt('Ingrese un lado del rectángulo en centímetros'));
let lado2=parseFloat(prompt('Ingrese el siguiente lado del rectángulo en centímetros'));

document.write(`El perimetro del rectángulo ingresado es: ${perimetroRectangulo(lado1, lado2)} cm.`);


//Punto 7 -Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


function tablaDeMultiplicar(
    numero = parseInt(prompt("Ingrese el valor de la tabla a calcular")),
    vueltas = parseInt(prompt("del 1 al cuanto?"))
  ) {
    if (isNaN(numero) || isNaN(vueltas)) {
      return alert("Debe ingresar un número");
    }
  
    document.write(`Tabla del ${numero}<br>`);
    for (let index = 1; index <= vueltas; index++) {
      document.write(`${numero} x ${index} = ${numero * index}<br>`); //2 x 1 = 2
    }
  }