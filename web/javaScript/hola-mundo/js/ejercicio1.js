'use strict'

var numero1 = prompt('ingrese el primer numero',0)
var numero2 = prompt('ingrese el segundo numero',0)
while (isNaN(numero1) ||  isNaN(numero2)){
    alert('ingresar bien los datos')
    numero1 = prompt('ingrese el primer numero',0)
    numero2 = prompt('ingrese el segundo numero',0)
}
if (numero1 == numero2){
    alert('son iguales');
}else if (numero1 > numero2){
    alert('numero 1 es mayor que el 2');
}else if (numero1 < numero2){
    alert('numero 2 es mayor');
}