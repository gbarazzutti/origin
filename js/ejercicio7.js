let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El numero 1 es el mayor de los tres");
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write("<br> El numero 2 es el mayorde los 3");
} else {
  document.write("<br> El numero 3 es el mayor de los tres");
}
