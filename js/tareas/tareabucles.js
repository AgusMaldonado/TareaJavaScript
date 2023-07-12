//Punto1

let age = parseInt(prompt("Ingresa tu edad  "));

if (!isNaN(age)) {
    if (age >= 18) {
        document.write("Puedes conducir");
    }else{
        document.write("Aun eres pequeño para conducir");
    }
}else {
    alert("Introduce un numero válido");
}

//Punto2

let nota;
do {
  nota = parseInt(prompt("Ingresa una nota del 0 al 10"));
  console.log(nota);

  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    switch (nota) {
      case 0:
      case 1:
      case 2:
        alert("Muy deficiente");
        break;
      case 3:
      case 4:
        alert("Insuficiente");
        break;
      case 5:
      case 6:
        alert("Suficiente");
        break;
      case 7:
        alert("Bien");
        break;
      case 8:
      case 9:
        alert("Notable");
        break;
      case 10:
        alert("Sobresaliente");
        break;
      default:
        alert("Nota erronea");
        break;
    }
  }else{
    alert("Ingrese un numero valido");
  }

} while (confirm("¿Desea continuar?"));

//Punto3

let resultado = '';
do {
	let palabra = prompt('Ingresa una palabra');
	if (resultado == '') {
	
		resultado = palabra;
	} else {
		resultado = resultado + '-' + palabra;
	}
} while ( confirm('¿Desea continuar?'));

document.write(resultado);

//Punto4
let suma = 0;
let numero = 0;

do {
	numero = prompt('Ingresa un numero');
    console.log(numero);
	if (!isNaN(parseInt(numero)) && numero !=null) {
	suma = suma + parseInt(numero);
    console.log('suma ' + suma);
	} else {
		
		if (numero != null) {
			alert(numero + ' No es un numero');
		}
	}
	
} while (numero != null);

document.write('Total: '+ suma);

//Punto5

let resto = 0;
let letra = "";
do {
    let numero = prompt("Ingrese su dni");
    if (!isNaN(numero) && numero !=null) {  
        numero= parseInt(numero);
        if (numero >= 0 && numero <= 99999999) {

            resto = numero % 23;
            console.log(resto);
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                
                    alert('Ingrese un numero valido');
                }
                alert("Numero: " + numero + ", Letra: " + letra);
        }else{
            alert('Ingrese un DNI valido');
        }
    }else{
        alert('Ingrese un numero valido');
    }
} while(confirm('¿Desea continuar?'))

