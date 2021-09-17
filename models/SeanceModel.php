<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class SeancesModel {

    //atributes
    public $id_loc;
    public $cin_loc;
    public $conn;    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

    public function getAllSeances() {

        $stmt = $this->conn->prepare("SELECT * FROM seance");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
    }

    public function getThisYearSeances() {
        $today = date("Y-m-d");
        $stmt = $this->conn->prepare("SELECT * FROM seance WHERE date like ?");
        $stmt->execute([$today]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
    }


    public function AddSeance() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["date"]) and isset($data["heure"]) and isset($data["id_locataire"]) and isset($data["id_groupe"]) ){
        $stmt = $this->conn->prepare("INSERT INTO seance VALUES(?,?,?,?,?)");
        $stmt->execute([0,$data["date"],$data["heure"],$data["id_locataire"],$data["id_groupe"]]);
        echo json_encode(http_response_code(201));
        }else{
            http_response_code(401);
            die();
        }
    }
   

    



    
}