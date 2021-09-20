<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class FactureEnsModelToJson {

    //atributes
    public $id_groupe;
    public $id_locataire;
    public $prenom_loc;
    public $nom_loc;
    public $totalSeances = 0;
    public $totalPaid = 0;
    public $totalToPay = 0;
    public $difference = 0;
   
    

    //constructor
    public function __construct($id_grp,$code_eleve,$prenom_eleve,$nom_eleve,$a,$b,$c,$d) {
       $this->id_groupe =  $id_grp;
       $this->id_locataire =  $code_eleve;
       $this->prenom_loc = $prenom_eleve;
       $this->nom_loc = $nom_eleve;
       $this->totalSeances = $a;
       $this->totalPaid = $b;
       $this->totalToPay = $c;
       $this->difference = $d;
    }
      


}