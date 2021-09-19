<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here
require "ToJson/ReservationFormToJson.php";


class ReservationModel {

    //atributes
    public $id_reserv;
    public $id_loc;
    public $id_locataire;
    public $id_groupe;
    public $datedeb;
    public $datefin;
    public $heuredeb;
    public $heurefin;
    public $jourdeb;
    public $jourfin;
    public $moisdeb;
    public $moisfin;
    public $andeb;
    public $anfin;
    public $archiv_state = 0;
    public $conn;
 
    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    


    public function getReservations() {       
        $stmt = $this->conn->prepare("SELECT* from reservation WHERE archive_state = 0 ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        
    }


    public function getReservationById() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_loc"]) and (intval($data["id_loc"])) ){
        $stmt = $this->conn->prepare("SELECT* from reservation WHERE id_loc = ? ");
        $stmt->execute([$data["id_loc"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        }else{
            http_response_code(401);
            die();
        }
    }

    public function ArchiverReservation() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_reserv"]) and (intval($data["id_reserv"])) ){
        $stmt = $this->conn->prepare("UPDATE reservation SET archive_state = ? WHERE id_reserv = ?");
        $stmt->execute([1,$data["id_reserv"]]);
        echo json_encode(http_response_code(201));
        }else{
            http_response_code(401);
            die();
        }
    }

    public function getReservationByLocation() {
        
        $stmt = $this->conn->prepare("SELECT * FROM reservation,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }

    public function getReservationByLocationAndLocataire() {
        
        $stmt = $this->conn->prepare("SELECT * FROM reservation,locations,locataires where (locations.id_loc=reservation.id_loc) and (reservation.id_locataire=locataires.id_locataire) and reservation.archive_state = 0 ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }


    public function AddReservation() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if (isset($data["id_loc"]) and isset($data["id_locataire"]) and isset($data["id_groupe"]) and isset($data["datedeb"]) and isset($data["datefin"]) and isset($data["heuredeb"]) and isset($data["jourdeb"]) and isset($data["moisdeb"]) and isset($data["andeb"]) and isset($data["heurefin"]) and isset($data["jourfin"]) and isset($data["moisfin"]) and isset($data["anfin"])){
    $count = 0;
    $stmts = $this->conn->prepare("SELECT  COUNT(ID_loc) FROM reservation WHERE (datedeb between ? and ? ) OR (datefin between ? and ? ) ");
    $stmts->execute([$data["datedeb"],$data["datefin"],$data["datedeb"],$data["datefin"]]);
    $count = intval($stmts->fetchColumn());

    if($count == 0) {
        $stmt = $this->conn->prepare("INSERT INTO reservation VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ");
        $stmt->execute([0,$data["id_loc"],$data["id_locataire"],$data["id_groupe"],$data["datedeb"],$data["datefin"],$data["heuredeb"],$data["jourdeb"],$data["moisdeb"],$data["andeb"],$data["heurefin"],$data["jourfin"],$data["moisfin"],$data["anfin"],0  ]);
        echo json_encode(http_response_code(201));
    }else {
        http_response_code(404);
        die();
    }

    }else{
            http_response_code(401);
            die();
        }
    }

    public function DeleteReservation() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
       if(isset($data["id_reserv"]) and (intval($data["id_reserv"]))){
        $stmt = $this->conn->prepare("DELETE FROM reservation WHERE id_reserv=?");
        $stmt->execute([$data["id_reserv"]]);
        echo json_encode(http_response_code(200));
    }else{
        http_response_code(401);
        die();
    }
    }


public function getReservationForm(){
    $stmt = $this->conn->prepare("SELECT * FROM locataires WHERE archiver_state = 0 ");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt1 = $this->conn->prepare("SELECT * FROM locations");
    $stmt1->execute();
    $result1 = $stmt1->fetchAll(PDO::FETCH_ASSOC);
    $stmt2 = $this->conn->prepare("SELECT * FROM groupe WHERE archive_state = 0 ");
    $stmt2->execute();
    $result2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
    $object = new ReservationFormToJson($result,$result1,$result2);
    echo json_encode($object);
}



}