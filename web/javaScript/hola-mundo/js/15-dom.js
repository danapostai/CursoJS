'use strict'

//DOM - Document object model
function cambiacolor(color){
   caja.style.background = color;
}
//conseguir elementos con un id concreto
//var caja = document.getElementById('micaja') ;
var caja= document.querySelector('#micaja');
caja.innerHTML = 'texto en la caja desde js';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className= 'hola';

//conseguir elemento por su etiqueta
var todoslosdiv = document.getElementsByTagName('div');




var seccion = document.querySelector('#miseccion');
var hr = document.createElement('hr');

var valor;
for(valor in todoslosdiv){
   console.log(todoslosdiv[valor]);
   if(typeof todoslosdiv[valor].textContent == 'string'){
      var parrafo = document.createElement('p');
      var texto = document.createTextNode(todoslosdiv[valor].textContent);
      parrafo.append(texto);
      seccion.append(parrafo);
   }
  
}

seccion.append(hr);
//conseguir elemento por su clase

var divsrojos = document.getElementsByClassName('rojo');
var divsamarrillos = document.getElementsByClassName('amarillo');
divsamarrillos[0].style.background = 'yellow'
var div;
for(div in divsrojos){
   if(divsrojos[div].className == 'rojo'){
      if(div % 2 == 0  ){
         divsrojos[div].style.background= 'red';
      }else{
         divsrojos[div].style.background= 'green';
      }
   }
   
}

var claserojo=  document.querySelector('.rojo');
console.log(claserojo);



