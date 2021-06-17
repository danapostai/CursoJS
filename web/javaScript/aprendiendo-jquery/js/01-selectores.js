$(document).ready(function(){
    //selector de id
    $('#rojo').css('background','red')
                         .css('color','white');

    $('#amarillo').css('background','yellow')
    .css('color','green');
    
    $('#verde').css('background','green')
    .css('color','white')

    //selectores de clases
    //$('.zebra').css('border','5px dashed black')

    $('.sinzebra').click(function(){
        console.log('click')
        //$(this).addClass('zebra');
        $(this).css('background','pink')
    })

    //selectores de etiquetas

    var parrafos = $('p').css('cursor','pointer');

    parrafos.click(function(){
        console.log('click la puta madre');
        
            var selec = $(this);
            if(selec.hasClass('zebra')){
                console.log(selec.removeClass('zebra')+'sklñdfgjlsñdkfgjflñd')//no puedo remover 
                selec.removeClass('zebra');  
            }else{
                selec.addClass('zebra');
            }
    });
    
    
    //selectoresde de atributos 

    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //Otros

    $('p,a').addClass('margensuperor');

    var busqueda =$('#caja').find('.resaltado');

    //esto se usa para bsucar con el parent() buscamos en la clase padre
    //var busqueda =$('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
    
    console.log(busqueda)
});