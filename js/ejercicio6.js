let numero1 = parseInt(prompt("Ingrese un primer numero"))
let numero2 = parseInt(prompt("Ingrese un segundo numero"))

if (numero1 > numero2){
    document.write("El numero 1 es mayor que el numero 2")
}
else if (numero1 == numero2){
    document.write("<br> Los numeros ingresados son iguales")
}
else {
    document.write("<br> El numero 2 es mayor que el numero 1")
}
