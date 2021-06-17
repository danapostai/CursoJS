'use strict'
/*
var numero = 444;
var texto1 = '    bienvenido al curso de js de curso tu vieja';
var texto2 = 'ES UNA PIJA';

console.log(numero);
var dato = numero.toString();
console.log(dato);
console.log('**************************************')
console.log(texto1);
dato = texto1.toUpperCase()
console.log(dato);
console.log('**************************************')
console.log(texto2);
dato = texto2.toLocaleLowerCase()
console.log(dato);
console.log('**************************************')
var nombre = 'kdsjfklsjfieawjfklasdjfklds';
console.log(nombre.length)
console.log('**************************************')
var textototal = texto1 +' '+texto2;
console.log(textototal)
textototal = texto1.concat(' '+texto2);
console.log(textototal)


var busqueda = texto1.trim()
console.log(busqueda)
*/

var nombre = prompt('mete tus nombres');
var apellidos = prompt('metes tus aplelitdod');

//var texto =  'Mi nombre es :' + nombre + 'Mis apellidos son: '+ apellidos;
var texto =`<h1>hola que tal </h1> 
            <h3>Mis apellidos ${apellidos}</h3>
            <h3>Mis nombres son ${nombre}</h3>`;
document.write(texto);