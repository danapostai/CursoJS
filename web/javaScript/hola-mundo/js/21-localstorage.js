'use strict'

//Liocalstorage 

//comprobar si el localstorage existe 
if(typeof(Storage) != 'undefined'){
   console.log('Localstorage disponible ')
}else{
   console.log('Localstorage no disponible ')
}

//guardar datos

localStorage.setItem('titulo','curso de Symfony');


///recuperarelemento

console.log(localStorage.getItem('titulo'));

document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

//guardar objetos

var usuario ={
   nombre: 'dana postai',
   email: 'algo@gmail.com',
   web: 'prueba.com'
};

localStorage.setItem('usuario', JSON.stringify(usuario));

//recuperar objeto

var usuariojs = JSON.parse(localStorage.getItem('usuario'));
console.log(usuariojs);

document.querySelector('#datos').append(usuariojs.web+' - '+usuariojs.nombre);

localStorage.clear();
localStorage.removeItem('usuario');