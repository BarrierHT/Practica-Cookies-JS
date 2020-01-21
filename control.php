<?php

if( isset($_COOKIE['name']) && isset($_COOKIE['pass']) ){
    $datos = array(
        'name' => $_COOKIE['name'], 
        'password' => $_COOKIE['pass']
    );
}
else{
    $datos = array(
        'name' => '', 
        'password' => ''
    );
}
echo json_encode($datos);




?>