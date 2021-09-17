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
   

    public function getSeancesByGroupAndLocataire() {

        $stmt = $this->conn->prepare("SELECT * FROM seance,groupe,locataires WHERE (seance.id_locataire = locataires.id_locataire) AND (seance.id_groupe = groupe.id_groupe)  ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }   

    public function getSeancesByEleves() {

        $stmt = $this->conn->prepare("SELECT * FROM seance,groupe,locataires WHERE (seance.id_locataire = locataires.id_locataire) AND (seance.id_groupe = groupe.id_groupe)  ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }   

    /*public function GetElevesByGroup() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_groupe"]) ){
        $stmt = $this->conn->prepare("SELECT * FROM groupe_eleve,eleves,groupe WHERE (groupe_eleve.id_groupe = ? ) AND (eleves.code_eleve = groupe_eleve.id_eleve) AND (groupe.id_groupe = groupe_eleve.id_groupe)");
        $stmt->execute([$data["id_groupe"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        }else{
            echo(json_encode(http_response_code(401)));
            die();
        }
    }*/


    
}