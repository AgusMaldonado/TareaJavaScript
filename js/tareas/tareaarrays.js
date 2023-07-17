//Escribe un programa que pida una frase, devuelva la cantidad de vocales que
//tiene la frase y muestre en consola cuales son.


//let frase = prompt ('Escriba una frase aquí');
//let vocales = ['a', 'e', 'i', 'o', 'u'];
//let cont = 0;
//for (let i=0;i<frase.length;i++) {

    //if(vocales.indexOf(frase[i]) !== -1){
        //++veces;
    //if(vocales==frase[i]){
        //cont++;
//}

//}

//alert("la vocal" + vocales + "se repite" + cont + "veces");


//Corrección de ejercicio

let vocales = ['a','á','e','é','i','í','o','ó','u','ú'];
let vocalesEncontradas = [];
let arrayLetras = frase.toLowerCase().split("")

for (let i=0; i<arrayLetras.length; i++){
    if (vocales.includes(arrayLetras[i])){
        vocalesEncontradas.push (arrayLetras[i]);
    }
}
console.log ('Se encontraron ${vocalesEncontradas.length} vocales, las mismas son ${vocalesEncontradas}');