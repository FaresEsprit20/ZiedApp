<?php

header('Access-Control-Allow-Origin: *');


// imports will be here

class GroupeEleveModelToJson {

    //atributes
    public $id_groupe;
    public $id_eleve;
    public $payer;
    public $presence;
    public $date;
    public $heure;
    public $nom_prof;

    //constructor
    public function __construct($id_groupe,$id_eleve,$payer,$presence, $date, $heure, $nom_prof) {
       $this->id_groupe = $id_groupe;
       $this->id_eleve = $id_eleve;
       $this->payer = $payer;
       $this->presence = $presence;
       $this->date = $date;
       $this->heure = $heure;
       $this->nom_prof = $nom_prof;
   
    }
    






}