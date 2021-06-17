'use strict'

function mostrar(array, texto) {
    document.write('<h1>Elementos del arreglo '+ texto+'</h1>')
    array.forEach((element, index )=> {
    document.write('<li>'+index+' - '+element+'</li>')
});
}
var numeros = new Array;

do{
    var nuevo =  parseInt(prompt('ingresar numeros a agregar'),0);
    while (nuevo == 0 || isNaN(nuevo)){
        nuevo =  parseInt(prompt('DEBE ingresar numeros a agregar'),0);
    }
    numeros.push(nuevo);

}while(numeros.length < 6)

console.log(numeros);
mostrar(numeros , 'normal');
numeros.sort(function(a,b){return a-b});
console.log(numeros)
mostrar(numeros, 'ordenados');

numeros.reverse();
console.log(numeros)
mostrar(numeros, 'alreves');


document.write('Cantidad de elemnetos: '+numeros.length+ '<br>');

var buscar =  parseInt(prompt('ingresar numeros a buscar'),0);
while (buscar == 0 || isNaN(buscar)){
    buscar =  parseInt(prompt('DEBE ingresar numeros a buscar'),0);
}
document.write('Elemento buscado: '+ buscar + '<br>')

var indice = numeros.findIndex(numeros => numeros == buscar);
if(indice == -1){
    document.write('<h1>NO ENCONTRADO</h1>')
}else{
    document.write('<h1>ENCONTRADO EN POSICION: '+indice+'</h1>')
}
    
