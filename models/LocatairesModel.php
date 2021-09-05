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
    

}