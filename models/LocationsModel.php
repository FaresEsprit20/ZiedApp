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
        if(isset($data["cin_loc"]) ){
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
        if(isset($data["cin_loc"]) and isset($data["ID_loc"]) and (intval($data["ID_loc"]))    ){
            $stmt = $this->conn->prepare("UPDATE locations SET cin_loc= ? WHERE ID_loc=?");
            $stmt->execute([$data["cin_loc"],$data["ID_loc"]]);
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
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if( isset($data["datedeb"]) and (isset($data["datefin"])) ){

        $stmt = $this->conn->prepare("SELECT * FROM locations WHERE ID_loc NOT IN ( SELECT distinct ID_loc FROM reservation WHERE (datedeb between ? and ? ) OR (datefin between ? and ? ) )");
        $stmt->execute([$data["datedeb"],$data["datefin"],$data["datedeb"],$data["datefin"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        }else{
            echo json_encode(http_response_code(401));
            die();

             }
    }


    public function getReservedLocations() {
        $stmt = $this->conn->prepare("SELECT * FROM reservation,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
    }


}