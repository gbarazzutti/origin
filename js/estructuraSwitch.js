/*
switch(operacion){
    case 1:
        // todo el codigo a ejecutar si la opcion que eligio el usuario es la 1
        break;
    case 2:
        // ....
        break;
    case ...
    case "otros": caso con texto
        ....
        break;
        default:
        // codigo a ejecutar por defecto 
}
*/

let estacion = prompt("Ingrese su estacion del año preferida: 1- verano, 2- invierno, 3- otoño, 4- primavera")

switch(estacion){
    case "1":
        document.write("El usuario selecciono la estacion verano");
        break;
    case "2":
        document.write("El usuario selecciono la estacion invierno");
        break;
    case "3":
        document.write("El usuario selecciono la estacion otoño");
        break;
    case "4":
        document.write("El usuario selecciono la estacion primavera");
        break;
    default:
        alert("Ingreso una opcion invalida")
}