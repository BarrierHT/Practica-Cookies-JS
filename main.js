$(document).ready(()=>{
   
    $.ajax({                                            //*Pedir los datos de las cookies
        type:'POST',
        url:'./control.php',
    })
    .done((response)=>{
        let name = $('input[name="name"]');
        let pass = $('input[name="pass"]');
        response = JSON.parse(response);
        
        if(response.name.length>0 || response.password.length>0)                  //*Si existen las cookies
          $('input[name="check"]').prop("checked",true);
        
        name.val(response.name); 
        pass.val(response.password);
    })
    .fail((response)=>{
        console.log('Error al pedir las cookies');
    });


    $('#form').submit(e=>{                                      //Subir datos
        e.preventDefault();
        let name = $('input[name="name"]').val();
        let pass = $('input[name="pass"]').val();
        let check = $('input[name="check"]').prop("checked");
        $.ajax({
            type:'POST',
            url:'./login.php',
            data:{'name' : name,'pass': pass,'checked':check}
        })
        .done((response)=>{                                     //Peticion hecha
            response = JSON.parse(response);
            if(response.name!='denied' && response.password!='denied') console.log('Usuario ingresado correctamente!!');
            else console.log('Usuario ingresado incorrectamente :(');
            console.log(response);
        })
        .fail((response)=>{
            console.log('Hubo un error con los datos');
        });  

       document.querySelector('#form').reset();
    }); 


});
