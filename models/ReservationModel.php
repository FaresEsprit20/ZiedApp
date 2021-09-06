<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here



class ReservationModel {

    //atributes
    public $id_reserv;
    public $id_loc;
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

        $stmt = $this->conn->prepare("SELECT* from reservations WHERE id_loc = ? ");
        $stmt->execute([$id_loc]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
     
    }

    public function InsertReservation() {

        $stmt = $this->conn->prepare("INSERT INTO reservations VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?) ");
        $stmt->execute([$cin_lo]);
        echo json_encode(http_response_code(201));
     
    }

    public function ArchiverReservation() {

        $stmt = $this->conn->prepare(" UPDATE reservations SET archive_state = ? ");
        $stmt->execute([$cin_lo]);
        echo json_encode(http_response_code(201));
     
    }


    public function getReservationByLocation() {
        $stmt = $this->conn->prepare("SELECT * FROM reservation,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute([$idReserv]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }


    public function DeleteReservationAndLocataire() {
        $stmt = $this->conn->prepare("SELECT * FROM reservations,locations where locations.id_loc=reservation.id_loc");
        $stmt->execute([$idReserv]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
     
    }


}