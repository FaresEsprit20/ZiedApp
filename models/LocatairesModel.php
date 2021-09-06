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
    



    public function ArchiverLocataire() {

        $stmt = $this->conn->prepare("UPDATE locataires SET archive_state= '1' WHERE id_locataire=?");
        $stmt->execute([$idLoc]);
      
        echo json_encode(http_response_code(200)) ;
     
    }


    public function DeleteLocataire() {

        $stmt = $this->conn->prepare("DELETE locataires WHERE id_locataire=?");
        $stmt->execute([$idLoc]);
      
        echo json_encode(http_response_code(200)) ;
     
    }

    public function GetLocataireByCin() {

        $stmt = $this->conn->prepare("SELECT * FROM locataires group by cin");
        $stmt->execute([$idLoc]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }

    public function UpdateLocataire() {
        $stmt = $this->conn->prepare("UPDATE locataires SET id_reserv=?,nom=?,prenom=?,cin=?,rue=?,codepostal=?,pays=?,tel=?,portable=?,email=?,commentaires=? WHERE id_locataire=?");
        $stmt->execute([$idLoc]);
        echo json_encode(http_response_code(200)) ;
     
    }

    public function getLocataireByLocationAndReservation() {
        $stmt = $this->conn->prepare("SELECT * FROM reservations, locations, locataires WHERE (reserv.id_reserv=locataires.id_reserv) and (reserv.id_loc=locations.id_loc) and (locataires.id_reserv=?)");
        $stmt->execute([$idReserv]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }



}