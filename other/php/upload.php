<?php
$root= $_SERVER["DOCUMENT_ROOT"];
$folder= $_POST["folder"];
$notes= [];
$error= false;

$Dir= filter_var($_POST["dir"], FILTER_VALIDATE_BOOLEAN);
$Dupl= filter_var($_POST["dupl"], FILTER_VALIDATE_BOOLEAN);


$fileName= $_FILES['files']['name'];
$fileTmpName= $_FILES['files']['tmp_name'];

$uploadDirectory= $root . $folder; 
if(!file_exists($uploadDirectory)){
   if($Dir){
      mkdir($uploadDirectory, 0777, true);
      $notes[]= "<span class='note'>{$folder} created (didn't exist)</span>";
   }
   else{
       $error= true;
       $notes[]= "<span class='red note'>{$folder} doesn't exist</span>";
   }
}

$uploadPath= $uploadDirectory . basename($fileName); 
if(file_exists($uploadPath)){
   if($Dupl){
     $increment= 0;
     $fileArr= explode('.', basename($fileName));
     $ext= array_pop($fileArr);
     $name= implode('.', $fileArr);

     while(file_exists($uploadPath)){
     $increment++;
     $uploadPath= "{$uploadDirectory}{$name}_{$increment}.{$ext}";
     }

     $notes[]= "<span class='note'>File exists!, renamed to {$name}_{$increment}.{$ext}</span>";
     $didUpload= move_uploaded_file($fileTmpName, $uploadPath);
   }
   else{
       $error= true;
       $notes[]= "<span class='red note'>File already exists!</span>";
       }

}
else{
$didUpload= move_uploaded_file($fileTmpName, $uploadPath);
}



if($didUpload && error){
echo '<span class="green msg">Success!</span><br>';
}
else{
echo '<span class="red msg">Unknown Error!</span><br>';
}


if (empty($notes)){
echo "<span class='note'>---</span>";
}
else{
echo implode("<br>", $notes);
}

?>