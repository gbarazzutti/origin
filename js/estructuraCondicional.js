let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

document.write("Numero 1= " + numero1);
document.write("<br>Numero 2= " + numero2);

// Estrucutura If
/* if(condicion logica){
    codigo a ejecutar si la respuesta es verdadera o true
}
si es false o falso, termina el programa sin ejecuciones

*/

// camino largo

if (numero1 > numero2) {
  document.write("<br> El numero 1 es mayor que el numero 2");
} else {
  // Codigo a ejecutar cuando no se cumple la condicion
  if (numero1 == numero2) {
    document.write("<br>Los numero ingresados son iguales");
  } else {
    document.write("<br> El numero 2 es mayor al numero 1");
  }
}

// camino corto - else if

if (numero1 > numero2) {
  document.write("<br> El numero 1 es mayor que el numero 2");
} else if (numero1 == numero2) {
  // Codigo a ejecutar cuando no se cumple la condicion
  document.write("<br>Los numero ingresados son iguales");
} else {
  document.write("<br> El numero 2 es mayor al numero 1");
}
