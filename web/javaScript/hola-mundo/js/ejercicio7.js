'use strict'

var numero = parseInt(prompt('ingrese numero ', 0));

while(isNaN(numero)){
    alert('numero incorecto');
    numero = parseInt(prompt('ingrese un numero ', 0));
}

var multiplicador = 0;
var numeros = 0;
while(numeros <= 10){
    document.write('<h1>Tabla del '+ numeros +'</h1>');
    multiplicador = 0;
    while(multiplicador <= 10){
        document.write(numeros + ' X ' + multiplicador +' = ' + numeros*multiplicador +'<br>');
        multiplicador++
    }
    numeros ++;
}