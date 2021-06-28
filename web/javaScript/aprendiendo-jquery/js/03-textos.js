$(document).ready(function(){

   reloadLinks();

    $('#add_button').removeAttr('disabled')
                    .click(function(){
       //Para agregarlo al final
     //$('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
     //para agregarlo al principio
     $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
     $('#add_link').val('')
     reloadLinks();
   });

});

function reloadLinks(){
      console.log($('a').length);
      $('a').each(function(index){
         var dom = $(this);
         var enlace = dom.attr('href');
         dom.attr('target','_blank');
         
         dom.text(enlace);
      })

   }