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

    public function AddNewLocation() {

        $stmt = $this->conn->prepare("INSERT INTO locations VALUES(?)");
        $stmt->execute([$cin_loc]);
        echo json_encode(http_response_code(201));
     
    }
    
    public function UpdateLocation() {

        $stmt = $this->conn->prepare("UPDATE locations SET cin_loc= ? WHERE id_loc=?");
        $stmt->execute([$cin_loc,$id_loc]);
        echo json_encode(http_response_code(200));
     
    }

    public function DeleteLocation() {

        $stmt = $this->conn->prepare("UPDATE locations SET cin_loc= ? ");
        $stmt->execute([$cin_loc]);
        echo json_encode(http_response_code(200));
     
    }

    public function getReservedLocations() {
        $stmt = $this->conn->prepare("SELECT * FROM reservations,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute([$idReserv]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }


  /*  public function getEmptyLocations() {
        $stmt = $this->conn->prepare("SELECT * FROM reservations,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute([$idReserv]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }*/


}