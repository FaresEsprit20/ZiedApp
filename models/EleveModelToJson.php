<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class EleveModelToJson {

    //atributes
    public $code_eleve;
    public $prenom_eleve;
    public $nom_eleve;
    public $classe;
    public $num_tel;
   
    

    //constructor
    public function __construct($code_eleve,$prenom_eleve,$nom_eleve,$classe,$num_tel) {
       $this->code_eleve =  $code_eleve;
       $this->prenom_eleve = $prenom_eleve;
       $this->nom_eleve = $nom_eleve;
       $this->classe = $classe;
       $this->num_tel = $num_tel;
    }
    

   


}