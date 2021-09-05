<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class GroupeEleveModel {

    //atributes
    public $id_groupe;
    public $id_eleve;
    public $payer;
    public $presence;
    public $date;
    public $heure;
    public $id_prof;
    public $conn;

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    



}