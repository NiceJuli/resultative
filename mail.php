<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$tel= $_POST['tel'];}
if (isset($_POST['email'])) {$email= $_POST['email'];}
if (isset($_POST['com'])) {$com= $_POST['com'];}
$sub = "=?utf-8?b?".base64_encode("Заявка с нового сайта результатива")."?=";
$address = "resultative@ya.ru "; 
$mes = "Имя: $name\r\nТелефон: $tel\r\nПочта: $email\r\nКомментарий: $com\r\n";
$headers = "Content-type:text/plain; charset='utf-8' \r\n";
mail ($address,$sub,$mes,$headers);

?>