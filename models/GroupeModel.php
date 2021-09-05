<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class GroupeModel {

    //atributes
    public $id_groupe;
    public $nom_groupe;
    public $id_ligne;
    public $id_prof;
    public $archive_state;
    public $conn;
    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    

}