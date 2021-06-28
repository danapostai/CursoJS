$(document).ready(function() {
   //muse over y mouse out

   var caja = $('#caja');
   /*
   caja.mouseover(function(){
      $(this).css('background','red');
   });

   caja.mouseout(function(){
      $(this).css('background','pink');
   })
   */
  //Lo mismo pero con hover
  function cambiarojo(){
      $(this).css('background','red');
   }

   function cambiarrosado(){
      $(this).css('background','pink');
   }

  caja.hover(cambiarojo,cambiarrosado)


  //clicl y doble click

  caja.click(function(){
     $(this).css("background", "blue")
            .css('color','white')
  })

  caja.dblclick(function(){
   $(this).css("background", "green")
          .css('color','yellow')
   })
   
   //focus y blur

   var dive =  $('#nombre');

   dive.focus(function(){
      $(this).css('border', '2px solid green')
   })

   dive.blur(function(){
      $(this).css('border','1px solid #ccc');
      
      $('#datos').text($(this).val()).show();
   })

   ///mouse down y mouseup

   var datos = $('#datos');

   datos.mousedown(function(){
      $(this).css('border-color' , 'gray');
   })
   datos.mouseup(function(){
      $(this).css('border-color' , 'pink');
   })

   //mousemove
   $(document).mousemove(function(){
      $('body').css('cursor','none');
      var sigueme = $('#sigueme')
      sigueme.css('left',event.clientX)
              .css('top',event.clientY)

   })
});