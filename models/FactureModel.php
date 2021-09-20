<?php

header('Access-Control-Allow-Origin: *');
require "ToJson/EleveModelToJson.php";
require "ToJson/FactureModelToJson.php";
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
        $result = 0;
        if( isset($data["id_seance"])  and isset($data["id_eleve"]) and isset($data["payement"])   ){
            $stmt2 = $this->conn->prepare("SELECT * from seance_eleves WHERE  id_seance= ? AND  id_eleve = ? ");
            $stmt2->execute([$data["id_seance"],$data["id_eleve"]]);
            $result = $stmt2->fetchColumn();

      if($result > 0){
        $stmt = $this->conn->prepare("UPDATE seance_eleves SET payement = ? WHERE  id_seance= ? AND  id_eleve = ? ");
        $stmt->execute([$data["payement"],$data["id_seance"],$data["id_eleve"]]);
        echo json_encode(http_response_code(200));
        }else {
            http_response_code(404);
            die();
            
        }
    }else if($result == 0 ){
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



    public function FacturerEleve() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        $result = 0;
        if( isset($data["id_groupe"])  and isset($data["payement"])   ){
            $stmt2 = $this->conn->prepare("SELECT * from seance WHERE  id_groupe = ? ");
            $stmt2->execute([$data["id_groupe"]]);
            $result = $stmt2->fetchColumn();

      if($result > 0){
        $stmt3 = $this->conn->prepare("SELECT * FROM groupe_eleve,eleves,groupe WHERE (groupe_eleve.id_groupe = ? ) AND (eleves.code_eleve = groupe_eleve.id_eleve) AND (groupe.id_groupe = groupe_eleve.id_groupe)");
        $stmt3->execute([$data["id_groupe"]]);
        $eleves = $stmt3->fetchAll(PDO::FETCH_ASSOC);

        $factures = array();
        
        foreach($eleves as $item){
            //initialization
            $totalSeances = 0;
            $totalPaid = 0;
            $totalToPay = 0;
            $difference = 0;

            $eleve = new EleveModelToJson($item["code_eleve"],$item["prenom_eleve"],$item["nom_eleve"],$item["classe"],$item["num_tel"]);
            
            //total number of seances
            $stmt = $this->conn->prepare("SELECT COUNT(*) FROM seance_eleves,seance WHERE (seance.id_seance = seance_eleves.id_seance ) AND (seance_eleves.id_eleve = ?)  AND (seance.id_groupe = ? )");
            $stmt->execute([$eleve->code_eleve,$data["id_groupe"]]);
            $totalSeances = intVal($stmt->fetchColumn());
            //total paid money
            $stmt4 = $this->conn->prepare("SELECT SUM(payement) FROM seance_eleves,seance WHERE (id_eleve = ?) AND (seance_eleves.id_seance = seance.id_seance) AND (seance.id_groupe = ? ) ");
            $stmt4->execute([$eleve->code_eleve,$data["id_groupe"]]);
            $totalPaid = floatVal($stmt4->fetchColumn());
             //total to pay money
            $totalToPay = floatVal($data["payement"]) * $totalSeances;
            //total difference
            $difference = $totalToPay - $totalPaid;
            
            $object = new FactureModelToJson($data["id_groupe"],$item["code_eleve"],$item["prenom_eleve"],$item["nom_eleve"],$item["classe"],$item["num_tel"],$totalSeances,$totalPaid,$totalToPay,$difference);
            array_push($factures,$object);
        }
        foreach($factures as $item){
            $date = new DateTime();
        $stmt5 = $this->conn->prepare("INSERT INTO facture(id_eleve, id_groupe,nbreseances,prixseances,montantpaye,topay) VALUES(?,?,?,?,?,?)");
        $stmt5->execute([$item->code_eleve,$data["id_groupe"],$item->totalSeances,$item->totalToPay,$item->totalPaid,$item->difference]);
    //echo(json_encode($item->code_eleve,$data["id_groupe"],$item["totalSeances"]));
    }
        echo json_encode($factures);
        }else if($result == 0 ){
            http_response_code(404);
            die();
            
        }
    }else {
        http_response_code(401);
        die();
    }
    }

}