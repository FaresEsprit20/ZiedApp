<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class LocModelToJson {

    //atributes
    public $id_locataire;
    public $prenom_loc;
    public $nom_loc;
   
    

    //constructor
    public function __construct($code_eleve,$prenom_eleve,$nom_eleve) {
       $this->id_locataire =  $code_eleve;
       $this->prenom_loc = $prenom_eleve;
       $this->nom_loc = $nom_eleve;
    }
      


}