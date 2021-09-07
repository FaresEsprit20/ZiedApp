<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class LocatairesModel {

    //atributes
    public $id_locataire;
    public $id_reserv;
    public $nom;
    public $prenom;
    public $cin;
    public $rue;
    public $codepostal;
    public $ville;
    public $pays;
    public $tel;
    public $portable;
    public $email;
    public $commentaires;
    public $archiver_state;
    public $conn;

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

    public function AddLocataire() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if((isset($data["id_reserv"]) ) and (isset($data["nom"]) and (!intval($data["nom"]))) and (isset($data["prenom"])) and (isset($data["cin"]) ) and (isset($data["rue"])) and (isset($data["codepostal"])) and (isset($data["pays"])) and (isset($data["tel"])) and (isset($data["portable"])) and (isset($data["email"])) and (isset($data["commentaires"]))  ){
        $stmt = $this->conn->prepare("INSERT INTO locataires VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->execute([0,$data["id_reserv"],$data["nom"],$data["prenom"],$data["cin"],$data["rue"],$data["codepostal"],$data["ville"],$data["pays"],$data["tel"],$data["portable"],$data["email"],$data["commentaires"],0]);
       echo json_encode(http_response_code(201));
    }else {
            http_response_code(401);
            die();
        }
    
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

    public function UpdateLocataire() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if((isset($data["id_reserv"]) and (intval($data["id_reserv"]))) ){
        $stmt = $this->conn->prepare("UPDATE locataires SET id_reserv=?,nom=?,prenom=?,cin=?,rue=?,codepostal=?,pays=?,ville=?,tel=?,portable=?,email=?,commentaires=? WHERE id_locataire=?");
        $stmt->execute([$data["id_reserv"],$data["nom"],$data["prenom"],$data["cin"],$data["rue"],$data["codepostal"],$data["pays"],$data["ville"],$data["tel"],$data["portable"],$data["email"],$data["commentaires"],$data["id_locataire"] ]);
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
        $stmt = $this->conn->prepare("SELECT * FROM reservation, locations, locataires WHERE (reservation.id_reserv=locataires.id_reserv) and (reservation.id_loc=locations.id_loc) and (locataires.id_reserv=?)");
        $stmt->execute([$data["id_reserv"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
        }else{
            http_response_code(401);
            die();
        }
    }



}