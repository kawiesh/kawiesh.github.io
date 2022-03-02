<?php

$protocol= $_SERVER['HTTPS'] === 'on' ? "https" : "http";
$fullurl= "${protocol}://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$path=  $_SERVER["REQUEST_URI"];
$file= pathinfo($path, PATHINFO_FILENAME);
$ext= pathinfo($path, PATHINFO_EXTENSION);
$filename= "{$file}.{$ext}";
$urldir= explode("/{$filename}", $path)[0];
$urldir= ($urldir=="") ? "/" : $urldir;

?>



<p>
<b>Full URL: </b> <?=$fullurl?><br>
<b>URL Path: </b> <?=$path?><br>
<b>File name: </b> <?=$filename?><br>
<b>File directory: </b> <?=$urldir?><br>
<hr>
<b>Root directory: </b> <?=$_SERVER["DOCUMENT_ROOT"]?><br>
<b>Current directory: </b> <?=__DIR__?><br>
<hr>
</p>