<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class GroupeModelToJson {

    //atributes
    public $id_groupe;
    public $nom_groupe;
    public $id_ligne;
    public $id_prof;
    public $archive_state;
    

    //constructor
    public function __construct($id_groupe, $nom_groupe, $id_ligne, $id_prof, $archive_state) {
         $this->id_groupe =  $id_groupe;
         $this->nom_groupe =  $nom_groupe;
         $this->id_ligne =  $id_ligne;
         $this->id_prof =  $id_prof;
         $this->archive_state =  $archive_state;
        
    }
    

}