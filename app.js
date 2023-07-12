//Escribe un programa que pida una frase, devuelva la cantidad de vocales que
//tiene la frase y muestre en consola cuales son.

let frase = prompt ('Escriba una frase aquí');
let vocales = ['a', 'e', 'i', 'o', 'u'];
let cont = 0;
for (let i=0;i<frase.length;i++) {

    //if(vocales.indexOf(frase[i]) !== -1){
        //++veces;
    if(vocales==frase[i]){
        cont++;
}

}

alert("la vocal" + vocales + "se repite" + cont + "veces");

