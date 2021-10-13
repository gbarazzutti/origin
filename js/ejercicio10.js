let numero1 = parseInt(prompt("Ingrese un numero"));

if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    document.write("El numero es divisible por 2, 3, 5 o 7")
}else{
    document.write("<br>El numero no es divisible por 2, 3, 5 o 7")
}