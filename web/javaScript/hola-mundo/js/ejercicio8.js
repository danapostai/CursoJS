
var numero1 = prompt('ingrese el primer numero',0)
var numero2 = prompt('ingrese el segundo numero',0)
while (numero1 <0 || numero2 <0 || isNaN(numero1) ||  isNaN(numero2)){
    alert('ingresar bien los datos')
    numero1 = prompt('ingrese el primer numero',0)
    numero2 = prompt('ingrese el segundo numero',0)
}


var resultado = 'La suma es: '+ (numero1 + numero2) + '<br>' + 'La resta es: '+ (numero1 - numero2) + '<br>' + 'La multiplicacion es: '+ (numero1 * numero2) + '<br>' + 'La division es: '+ (numero1 / numero2) + '<br>';
var resultadon = 'La suma es: '+ (numero1 + numero2) + '\n' + 'La resta es: '+ (numero1 - numero2) + '\n' + 'La multiplicacion es: '+ (numero1 * numero2) + '\n' + 'La division es: '+ (numero1 / numero2) + '\n';
console.log(resultadon);
alert(resultadon);
document.write(resultado);
