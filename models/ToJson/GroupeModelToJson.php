<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class GroupeModelToJson {

    //atributes
    public $id_groupe;
    public $nom_groupe;
    public $archive_state;
    

    //constructor
    public function __construct($id_groupe, $nom_groupe, $archive_state) {
         $this->id_groupe =  $id_groupe;
         $this->nom_groupe =  $nom_groupe;
         $this->archive_state =  $archive_state;
        
    }
 
    
    

}