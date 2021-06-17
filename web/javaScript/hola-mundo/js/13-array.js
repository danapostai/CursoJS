'use strict'

 var nombres = ['1dsfdfsd','2.fdgfsdgfdgfd','3.dsafsfsadddf','4dfwefwefwef','5dsfdsfsa','6fgfdgfsdsgfd'];
 
// var elemento = parseInt(prompt('Que elemneto qeres?',0));
 

/*
 if(elemento > nombres.length){
    elemento = parseInt(prompt('el elemento no puede ser mayor a ' + nombres.length ,0));
    alert(nombres[elemento])
 }else{
    alert(nombres[elemento])
 }
*/
/*
document.write('<h1>algo</h1>');
document.write('<ul>');
for (let index = 0; index < nombres.length; index++) {
    document.write('<li>'+nombres[index]+'</li>');
    
}*/
/*
nombres.forEach(element => {
    document.write('<li>'+element+'</li>');
});
document.write('</ul>');
*/

var categorias = ['Accion','Terror','Comedia'];
var pelicula = ['la vida es bella', 'harry potter','grantorrino']
console.log(pelicula);

var cine = [categorias ,pelicula];

var nuevo = '';
/*
while (nuevo != 'ACABAR'){
    nuevo = prompt('ingresar peliculas')
    pelicula.push(nuevo);
}
*/
console.log(pelicula);
var indice = pelicula.indexOf('harry potter');
if (indice > -1)  pelicula.splice(indice,1)  

console.log(pelicula);

var arreglo_string = pelicula.join();

var cadena ='isdjsakdsad,kfkjhakfjdghfd,sjdfdaskfds';

var cadena_array = cadena.split(',')
console.log(arreglo_string);
console.log(cadena_array)

for(let peli in pelicula){
    document.write('<li>'+pelicula[peli]+'</li>');
}
 
//// buesqueeda

var busqueda = pelicula.find(pelicula => pelicula == 'grantorrino')

console.log (busqueda)

var precios = [12,24,54,67,87];

var busqueda2= precios.some(precios => precios >= 24)
console.log(busqueda2)