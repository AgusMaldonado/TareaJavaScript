// Punto1
let edad = prompt("Ingrese su edad: ");
edad = Number(edad);

if (isNaN(edad)) {
    
    alert("La edad ingresada no es un número válido.");
    exit();
}


if (edad >= 18) {

    alert("Usted ya puede conducir.");
} else {

    alert("Usted todavía no puede conducir.");
}

//Punto2
let respuesta;

// Declarar una variable para almacenar la nota del usuario
let nota;

// Iniciar un bucle do while
do {
    // Pedir una nota al usuario
    nota = prompt("Ingrese una nota: ");
nota = Number(nota);
 if (isNaN(nota)) {
 
alert("La nota ingresada no es un número válido.");
} else {
       
if (nota < 0 || nota > 10) {
            
alert("La nota ingresada debe estar entre 0 y 10.");
} else {
            
 alert("Muy deficiente");
} else if (nota < 5) {
alert("Insuficiente");
} else if (nota < 6) {
 alert("Suficiente");
} else if (nota < 7) {
alert("Bien");
} else if (nota < 9) {
alert("Notable");
} else {
alert("Sobresaliente");
}
}
}

respuesta = prompt("¿Quiere continuar? (SI/NO): ");

respuesta = respuesta.toUpperCase();

} while (respuesta == "SI"); 

//Punto3

let cadena;

let resultado = "";
while (true) {
    
cadena = prompt("Ingrese una cadena de texto: ");

    
if (cadena == null) {
        
break;
}
resultado += cadena + "-";
}

alert("El resultado es: " + resultado.slice(0, -1));

//Punto4


