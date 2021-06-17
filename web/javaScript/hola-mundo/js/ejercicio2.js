'use strict'

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('mete numero',0));
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        suma += numero; 
        contador ++
        
        console.log('sumaa '+ numero);
        console.log('contador'+ contador);
    }
}while(numero >=0)



alert('sumaa '+ suma);
alert('media '+ suma/contador);