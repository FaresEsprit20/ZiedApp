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
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["cin_loc"]) and (intval($data["id_loc"])) ){
        $stmt = $this->conn->prepare("INSERT INTO locations VALUES(?,?)");
        $stmt->execute([0,$data["cin_loc"]]);
        echo json_encode(http_response_code(201));
        }else{
            http_response_code(401);
            die();
        }
    }
 
    public function UpdateLocation() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["cin_loc"]) and isset($data["id_loc"]) and (intval($data["id_loc"])) and (!intval($data["cin_loc"]))    ){
            $stmt = $this->conn->prepare("UPDATE locations SET cin_loc= ? WHERE id_loc=?");
            $stmt->execute([$data["cin_loc"],$data["id_loc"]]);
            echo json_encode(http_response_code(200));
        }else {
            http_response_code(401);
            die();
        }
       
     
    }

    
    public function DeleteLocation() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if( isset($data["id_loc"]) and (intval($data["id_loc"]))     ){
        $stmt = $this->conn->prepare("DELETE From locations WHERE  id_loc= ? ");
        $stmt->execute([$data["id_loc"]]);
        echo json_encode(http_response_code(200));
        }else {
            http_response_code(401);
            die();
        }
    }

    public function getEmptyLocations() {
        $stmt = $this->conn->prepare("SELECT * FROM locations WHERE id_loc NOT IN (SELECT locations.id_loc FROM reservation,locations WHERE  locations.id_loc=reservation.id_loc)");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }

    public function getReservedLocations() {
        $stmt = $this->conn->prepare("SELECT * FROM reservation,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
    }


}