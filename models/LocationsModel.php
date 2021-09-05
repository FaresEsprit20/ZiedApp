<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class LocationsModel {

    //atributes
    public $id_loc;
    public $cin_loc;
    public $conn;    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

    public function getAllLocations() {

        $stmt = $this->conn->prepare("SELECT * FROM locations");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }



}