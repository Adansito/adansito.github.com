//console.log('Hello world!!');

// Obtenemos através de la clase los elementos que generarán un evento.
let close = document.querySelectorAll('.close');


//Recorremos el array para cada  elemento.
close.forEach(function(elemento){
  
    //Agregamos un evento al elemento
  elemento.addEventListener('click', function(e){
    //Prevenimos para que no se realicé la función predeterminada
    e.preventDefault();
    
    //Seleccionamos por clase al elemento al cuál se le agregarán las nuevas clases.
    let content = document.querySelector('.content');
    
    //Removemos las clases
    //content.classList.remove('animated');
    //content.classList.remove('fadeInDown');
    
    //Añadimos las nuevas clases
    content.classList.add('animated');
    content.classList.add('fadeOutUp');  

    //Retrasamos el tiempo de ejecución para obtener un mejor efecto.
    setTimeout(function(){location.href="/boletines";},1000);
 
 });

});

