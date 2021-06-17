'use strict'

function calculadora (a,b, mostrar = false){
    console.log('suma: '+ (a+b));
    console.log('resta: '+ (a-b));
    console.log('multiplicacion: '+ (a*b));
    console.log('divicion: '+ (a/b));
    console.log('**************************************')

}

function listadofrutas(frutas1, frutas2 , ...todas){
    console.log('FRuta1 :' + frutas1);
    console.log('FRuta2 :' + frutas2);
    for (let index = 0; index < todas.length; index++) {
        console.log('FRuta'+(index+3)+' :' + todas[index]);
        
    }
}


//listadofrutas('naranja', 'manzana','sandia','banana','duranzo','melozoton')
//console.log('**************************************')
var frutas = ['naranja', 'manzana']
//listadofrutas(...frutas, 'sandia','banana','duranzo','melozoton')

var pelicula = function(nombre){
    return 'La pelicula es '+ nombre;
}

function sumame(numero1, numero2, sumaymuestra, sumapordos) {
    var sumar= numero1+numero2;

    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;
}
/*
sumame(5,7,function (dato) {
    console.log('la suma es:',dato);
}, function (dato) {
    console.log('La suma por dos es :',(dato*2))
    
})

sumame(5,7,dato => {
    console.log('la suma es:',dato);
}, dato => {
    console.log('La suma por dos es :',(dato*2))
    
})

*/