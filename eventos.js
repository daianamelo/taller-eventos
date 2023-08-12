

contenedor=document.getElementById('contenedor')
boton=document.getElementById('boton')


boton.addEventListener('click',function(){

    alert( "Hola!")
    event.stopPropagation();
 })


contenedor.addEventListener('click',function(){

    alert( "Hola! Soy el div")
    
 })
