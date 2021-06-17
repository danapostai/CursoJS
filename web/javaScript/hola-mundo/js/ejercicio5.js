'use string'

var numero = parseInt(prompt('ingrese numero ',1));

for (let index = 1; index < numero; index++) {
    if(numero % index == 0){
        console.log('divisores ' +index);
    }
    
}