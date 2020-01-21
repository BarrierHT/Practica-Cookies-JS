<?php

    $name = $_POST['name'];
    $pass = $_POST['pass'];
    $check = $_POST['checked'];
    
    if( strlen($name) == 0 ) $name = 'denied';
    if( strlen($pass) == 0 ) $pass = 'denied';
     
    $datos = array(
        'name' => $name, 
        'password' => $pass,
        'checked' => $check
    );

    if($check === 'true'){
        setcookie('name',$name,time()+(60*60*24*365));
        setcookie('pass',$pass,time()+(60*60*24*365));
    }
    else{
        setcookie('name',$name,time()+(60*60*24*365*-1));
        setcookie('pass',$pass,time()+(60*60*24*365*-1));
    }

    echo json_encode($datos);
    
    
    

?>