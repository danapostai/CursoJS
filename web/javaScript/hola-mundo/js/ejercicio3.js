'use strict'

var numero1 = parseInt(prompt('Ingrese primer numero:', 0));
var numero2 = parseInt(prompt('Ingrese segundo numero:', 0));

if (numero1 == numero2){
    alert('Los numero son iguales')
    numero1 = parseInt(prompt('Ingrese primer numero:', 0));
    numero2 = parseInt(prompt('Ingrese segundo numero:', 0));
}
if (numero1 == numero2+1 || numero1+1 == numero2){
    alert('Los numero son corelativos')
    numero1 = parseInt(prompt('Ingrese primer numero:', 0));
    numero2 = parseInt(prompt('Ingrese segundo numero:', 0));
}
if(numero1 < numero2){
    for (let index = numero1+1; index < numero2; index++) {
        document.write('numeros entre '+index + '<br>');  
    }
}else{
    for (let index = numero2+1; index < numero1; index++) {
        document.write('numeros entre '+index + '<br>');
        
    }
}