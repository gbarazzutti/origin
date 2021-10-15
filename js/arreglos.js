// crear un arreglo con datos

let series = ["Naruto" , "The Good Doctor" , "Game of Thrones" , 2, 8, true]

// crear un arreglo vacio
let temporadas = []

// mostrar unvalor de un arreglo
document.write(series[2])
console.log(series.length)

// agregar un elemento al final del arreglo
series.push("Dr. House")

// contar los elementos que tiene el arreglo
console.log(series.length)
document.write("<br>" + series[6])

//  recorrer cada elemento de un arreglo
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br> Serie: " + series[posicion])
}

// agregar un elemento en una posicion particular

series.splice(1,0,"Loki")

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br> Serie: " + series[posicion])
}

// eliminar un elemento de una posicion particular

series.splice(4,2)

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br> Serie: " + series[posicion])
}

// modificar un elemento desde una posicion particular de un arreglo
series[4] = "Vikingos"

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br> Serie: " + series[posicion])
}

// eliminar todos los elementos desde una posicion particular

series.splice(2)

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br> Serie: " + series[posicion])
}