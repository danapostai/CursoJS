'use strict'

var numero = parseInt(prompt('ingrese numero ', 0));

while(isNaN(numero)){
    alert('numero incorecto');
    numero = parseInt(prompt('ingrese un numero ', 0));
}

if(numero == 0){
    alert ('cero no es impar ni par')
}else if(numero % 2 == 0){
   alert('es par');
}else{
   alert('es impar');
}