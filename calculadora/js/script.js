let buttons = document.querySelectorAll('button');
//console.log(buttons[2]);
for(let i = 0; i < buttons.length; i++){

    let button = buttons[i]; 
    button.addEventListener('click', function(){
        let classbutton = button.className;
        let valuebutton = button.value;
            if( classbutton == 'isNumber'){

                isnumber(valuebutton);
            }else{

                isnotnumber(valuebutton);
            }

    })

}



 function isnumber(valuebutton){

    console.log('Soy un número' + valuebutton);
 }


 function isnotnumber(valuebutton){

    console.log('No soy un número' + valuebutton);
 }


    
    



