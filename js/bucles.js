// document.write("Elemento 1<br>")
// document.write("Elemento 2<br>")
// document.write("Elemento 3<br>")
// document.write("Elemento 4<br>")
// document.write("Elemento 5<br>")
// document.write("Elemento 6<br>")

// while

/*
while(condicion logica){
    codigo a ejecutar
    cambiar condicion logica
}
*/

// let contador = 2
// while(contador <=20){
//     document.write("Elemento "+ contador +"<br>" )
//     // contador ++ 
//     contador = contador + 2
// }

// do-while  hacer algo mientras se cumpla la condicion logica siguiente 

let cont = 100

do{
    // codigo que quiero ejecutar varias veces
    document.write("Contador "+ cont +"<br>")
    // cambio la condicion logica
    // cont--
    cont = cont - 5
}while(cont >= 50)


/* for(crear la variable; condicion logica; incrementar/decrementar la variable){
    ...codigo a ejecutar muchas veces
}
*/

for(let i = 1; i <=20 ; i= i+2){
    document.write("Estructura for vuelta "+i+"<br>" )
}
