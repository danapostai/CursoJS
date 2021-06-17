'use strict'
///BOM -- browser object model
function getBOM() {
console.log(screen.height);
console.log(screen.width);
console.log(window.location);
}

function redirect(url) {
   window.location.href = url
}

function abrirventana(url) {
   window.open(url,'','width=400,height=300');
}