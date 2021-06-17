
var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var textoHora = `
   El año es: ${year}
   El mes es: ${fecha.getMonth()+1}
   El dia es: ${dia}
   Hora: ${fecha.getHours()},
   minutos: ${fecha.getMinutes()},
   segundos: ${fecha.getSeconds()}
`
console.log(textoHora);

console.log(Math.ceil(Math.random()*100));