<?php

header('Access-Control-Allow-Origin: *');


class Database{
 
 // specify your own database credentials
 private $host = "localhost";
 private $db_name = "reservapp";
 private $username = "root";
 private $password = "";
 public $conn;

 // get the database connection
 public function getConnection(){

     $this->conn = null;
     $myIp = getHostName();
     $hn = "DESKTOP-5HGRN48";
     ob_start(); // Turn on output buffering
     system('ipconfig /all'); //Execute external program to display output
     $mycom=ob_get_contents(); // Capture the output into a variable
     ob_clean(); // Clean (erase) the output buffer
     
     $findme = "Physical";
     $pmac = strpos($mycom, $findme); // Find the position of Physical text
     $mac=substr($mycom,($pmac+36),17); // Get Physical Address
     
    $entry = "38-D5-47-CF-BD-57";


     if(($myIp == $hn) and ($mac == $entry)){
     try{
         $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
         $this->conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
         http_response_code(200);
     }catch(PDOException $exception){
         echo "Connection error: " . $exception->getMessage();
         http_response_code(500);
     }

     return $this->conn;
    }else {
        http_response_code(401);
        die("404 Unauthorized");
    }
 }
}