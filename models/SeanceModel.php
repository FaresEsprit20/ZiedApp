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
        $lastInsertedId = $this->conn->lastInsertId();
        $stmt2 = $this->conn->prepare("SELECT * FROM groupe_eleve,groupe WHERE (groupe_eleve.id_groupe = ? )  AND (groupe.id_groupe = groupe_eleve.id_groupe)");
        $stmt2->execute([$data["id_groupe"]]);
        $result2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        foreach($result2 as $item){
            $stmt3 = $this->conn->prepare("INSERT INTO seance_eleves VALUES(?,?,?,?,?) ");
            $stmt3->execute([0,$lastInsertedId,$item["id_eleve"],0,0 ]);
        }
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
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_groupe"]) AND isset($data["id_seance"])){
        $stmt = $this->conn->prepare("SELECT * FROM groupe_eleve,eleves,groupe,seance,seance_eleves WHERE (groupe_eleve.id_groupe = ?) AND (eleves.code_eleve = groupe_eleve.id_eleve) AND (groupe.id_groupe = groupe_eleve.id_groupe) AND(seance.id_seance = ?) AND (seance.id_groupe = ?) AND (seance_eleves.id_seance = ?) AND (groupe_eleve.id_eleve = seance_eleves.id_eleve)");
        $stmt->execute([$data["id_groupe"],$data["id_seance"],$data["id_groupe"],$data["id_seance"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        }else {
            echo json_encode(http_response_code(401));
            die();
        }
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