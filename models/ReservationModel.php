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
    


}