//Punto 1
alert("un mensaje");

//Punto 2
document.write("Hello World");

//Punto 3
let num1=3;
let num2=5;
console.log(num1 + num2);

//Punto 4
let nombre = prompt("Ingrese el nombre de ususario");
console.log("El nombre del usuario es:", nombre);

//Punto5
let nume1 = parseInt(prompt("Ingrese el primer valor"));
let nume2 = parseInt(prompt("Ingrese el segundo valor"));
console.log(parseInt(nume1+nume2));

//Punto6
let numero1= 15;
let numero2= 3;
console.log(numero1 > numero2);

//Punto7
let number1 = parseInt(prompt("Ingrese el primer valor"));
let number2 = parseInt(prompt("Ingrese el segundo valor"));
let number3 = parseInt(prompt("Ingrese el tercer valor"));
console.log(Math.max(number1, number2, number3));

//Punto8
let numb1 = parseInt(prompt("Ingrese el primer valor"));
let numb2 = parseInt(prompt("Ingrese el segundo valor"));
if(numb1 % 2 === 0 ) {
    console.log("El", numb1, "es divisible por 2");
}
else  {
    console.log("El", numb1, "no es divisible por 2");
}

if(numb2 % 2 === 0 ) {
    console.log("El", numb2, "es divisible por 2");
}
else  {
    console.log("El", numb2, "no es divisible por 2");
}

//Punto10
let num = prompt("Ingrese el valor");
if(num%2 === 0){
    console.log("El numero es divisible por 2");
} else if(num%3 === 0){
    console.log("El numero es divisible por 3");
} else if(num%5 === 0){
    console.log("El numero es divisible por 5");
} else if(num%7 === 0){
    console.log("El numero es divisible por 7");
} else {
    console.log("El numero no es divisible por 2, 3, 5, 7");
}

//Punto11
let numerito = prompt("Ingrese el valor");
if(num%2 === 0){
    console.log("El numero es divisible por 2");
    variable = num%2;
} 
 if(num%3 === 0){
    console.log("El numero es divisible por 3");
    variable = num%3;
} 
 if(num%5 === 0){
    console.log("El numero es divisible por 5");
    variable = num%5;
} 
 if(num%7 === 0){
    console.log("El numero es divisible por 7");
    variable = num%7;
} 