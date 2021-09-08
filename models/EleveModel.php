<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class EleveModel {

    //atributes
    public $code_eleve;
    public $prenom_eleve;
    public $nom_eleve;
    public $classe;
    public $num_tel;
    public $conn;
    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

   


}