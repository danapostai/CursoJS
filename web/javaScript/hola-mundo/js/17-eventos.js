'use strict'

//Eventos del raton 

window.addEventListener('load',()=>{
      
   function cambiarcolor() {
      console.log('me has dad click');
      var bg =boton.style.background;
      if(bg == 'green'){
         boton.style.background= 'red';

      }else{
         boton.style.background = 'green';
      }
      boton.style.padding = '10px';
      boton.style.border = '1px solid #ccc';
      return true;
   }

   var boton = document.querySelector('#boton');
   //click
   boton.addEventListener('click',function(){
      cambiarcolor()
      this.style.border = '10px solid black'
   });

   //mouse over 
   boton.addEventListener('mouseover',function(){boton.style.background = 'yellow'});

   //mouseout

   boton.addEventListener('mouseout',function(){boton.style.background = 'black'});

   var input =  document.querySelector('#campo_nombre');
   //focus
   input.addEventListener('focus',function(){console.log('estas haciedno focus en el input')});


   //blur
   input.addEventListener('blur',function(){console.log('estas fuera del en el input')});

   //keydown
   input.addEventListener('keydown',function(){console.log('pulsaste esta tecla', String.fromCharCode(event.keyCode))});

   //keypress
   input.addEventListener('keypress',function(){console.log('Tecla presionada', String.fromCharCode(event.keyCode))});

   //keyup
   input.addEventListener('keyup',function(){console.log('Tecla soltada', String.fromCharCode(event.keyCode))});
});
