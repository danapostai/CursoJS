'use strict'

var numero =40;
console.log(numero);
if(true){
    var numero =50;
    console.log(numero);
}
console.log(numero);

console.log('ahora con let')
var numero =40;
console.log(numero);
if(true){
    let numero =50;
    console.log(numero);
}
console.log(numero);

console.log(typeof numero);