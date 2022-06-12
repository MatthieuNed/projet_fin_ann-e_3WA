<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $host = "db.3wa.io";
        $username = "matthieuned";
        $password = "f33cb432322eb652ceb6af50a620cdaa";
        $database = "matthieuned_final";
    
            $lastName = $_POST['lastName'];
            $firstName = $_POST['firstName'];
            $email = $_POST['email'];
            $comment = $_POST['comment'];
    
            $mysqli = new PDO( 'mysql:host=db.3wa.io;dbname=matthieuned_final;charset=utf8', 'matthieuned', 'f33cb432322eb652ceb6af50a620cdaa', [
              PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // gestion des erreurs liées au fecth
              PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION // gestion des exceptions
              ]);
    
                if ($mysqli->connect_error) {
          die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
        }  
        else
   echo "Merci pour votre commentaire !";
        $statement = $mysqli->prepare("INSERT INTO Registration (lastName, firstName, email, comment) VALUES(?,?,?,?)");
    
        $statement->bind_param('ss', $lastName, $firstName, $email, $comment); 
        $statement->execute();

      }
?>