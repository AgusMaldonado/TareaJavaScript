//En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, Realidad Virtual. Si un usuario paga 4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
let creditos = parseInt(prompt("Ingrese la cantidad de creditos"));

switch (true) {
  case creditos < 1:
    console.log("sala Arcade");
    break;
  case creditos > 2:
    console.log("sala Arcade y Consolas");
    break;
  case creditos > 3:
    console.log("Sala Arcade, Consolas, Rol");
    break;
  case creditos > 4:
    console.log("Sala Arcade, Consolas, Rol, Realidad virtual");
    break;
  default:
    console.error("El dato ingresado no es válido");
    break;
}