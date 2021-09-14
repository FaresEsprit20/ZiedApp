<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class LocatairesModel {

    //atributes
    public $id_locataire;
    public $nom;
    public $prenom;
    public $cin;
    public $rue;
    public $codepostal;
    public $ville;
    public $tel;
    public $portable;
    public $email;
    public $archiver_state;
    public $conn;

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

    public function AddLocataire() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if( (isset($data["nom"])) and (isset($data["prenom"])) and (isset($data["cin"]) ) and (isset($data["rue"])) and (isset($data["codepostal"])) and (isset($data["tel"])) and (isset($data["portable"])) and (isset($data["email"])) ){
        $stmt = $this->conn->prepare("INSERT INTO locataires VALUES(?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->execute([0,$data["nom"],$data["prenom"],$data["cin"],$data["rue"],$data["codepostal"],$data["ville"],$data["tel"],$data["portable"],$data["email"],0]);
       echo json_encode(http_response_code(201));
    }else {
            http_response_code(401);
            die();
        }
    
    }

    public function getLocataires() {       
        $stmt = $this->conn->prepare("SELECT * from locataires WHERE archiver_state = 0 ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        
    }
    
    public function ArchiverLocataire() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_locataire"]) and (intval($data["id_locataire"])) ){
        $stmt = $this->conn->prepare("UPDATE locataires SET archiver_state= ? WHERE id_locataire=?");
        $stmt->execute([1,$data["id_locataire"]]);
        echo json_encode(http_response_code(200)) ;
        }else{
            http_response_code(401);
           die();
        }
          
    }


    public function DeleteLocataire() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_locataire"]) and (intval($data["id_locataire"])) ){
        $stmt = $this->conn->prepare("DELETE FROM locataires WHERE id_locataire= ?");
        $stmt->execute([$data["id_locataire"]]);
        echo json_encode(http_response_code(200)) ;
        }else{
            http_response_code(401);
            die();
        }
    }


    public function GetLocatairesByCin() {
        $stmt = $this->conn->prepare("SELECT * FROM locataires group by cin");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }

    public function GetLocatairesByNom() {
        $stmt = $this->conn->prepare("SELECT * FROM locataires group by cin WHERE archiver_state = 0 ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }

    public function UpdateLocataire() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if((isset($data["id_locataire"]) and (intval($data["id_locataire"]))) ){
        $stmt = $this->conn->prepare("UPDATE locataires SET nom=?,prenom=?,cin=?,rue=?,codepostal=?,ville=?,tel=?,portable=?,email=? WHERE id_locataire=?");
        $stmt->execute([$data["nom"],$data["prenom"],$data["cin"],$data["rue"],$data["codepostal"],$data["ville"],$data["tel"],$data["portable"],$data["email"],$data["id_locataire"] ]);
        echo json_encode(http_response_code(200)) ;
        }else{
            http_response_code(401);
            die();
        }
    }

    public function getLocataireByLocationAndReservation() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["id_reserv"]) and (intval($data["id_reserv"])) ){
        $stmt = $this->conn->prepare("SELECT * FROM reservation, locations, locataires WHERE (reservation.id_loc=locations.ID_loc) and (locataires.id_locataire=reservation.id_locataire) and (reservation.id_reserv = ?)");
        $stmt->execute([$data["id_reserv"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
        }else{
            http_response_code(401);
            die();
        }
    }



}