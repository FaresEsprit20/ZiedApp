<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class FactureModel {

    //atributes
    public $conn;
    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

    public function AddGroup() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if (isset($data["nom_groupe"]) ){
        $stmt = $this->conn->prepare("INSERT INTO groupe VALUES(?,?,?) ");
        $stmt->execute([0,$data["nom_groupe"],0  ]);
        echo json_encode(http_response_code(201));
        }else{
            http_response_code(401);
            die();
        }
    }


    public function DeleteGroup() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if( isset($data["id_groupe"]) and (intval($data["id_groupe"]))     ){
        $stmt = $this->conn->prepare("DELETE From groupe WHERE  id_groupe= ? ");
        $stmt->execute([$data["id_groupe"]]);
        echo json_encode(http_response_code(200));
        }else {
            http_response_code(401);
            die();
        }
    }


    public function PayerSeance() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if( isset($data["id_seance"]) and (intval($data["id_seance"])) and isset($data["id_eleve"]) and (intval($data["id_eleve"])) and isset($data["payement"])   ){
        $stmt = $this->conn->prepare("UPDATE seance_eleves SET payement = ? WHERE  id_seance= ? AND  id_eleve = ? ");
        $stmt->execute([$data["payement"],$data["id_seance"],$data["id_eleve"]]);
        echo json_encode(http_response_code(200));
        }else {
            http_response_code(401);
            die();
        }
    }


    public function getFactures() {       
        $stmt = $this->conn->prepare("SELECT * from groupe WHERE archive_state = 0 ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        
    }



}