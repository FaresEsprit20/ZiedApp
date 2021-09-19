<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class FacturemodelToJson {

    //atributes
    public $code_eleve;
    public $prenom_eleve;
    public $nom_eleve;
    public $classe;
    public $num_tel;
    public $totalSeances = 0;
    public $totalPaid = 0;
    public $totalToPay = 0;
    public $difference = 0;
   
    

    //constructor
    public function __construct($code_eleve,$prenom_eleve,$nom_eleve,$classe,$num_tel,$a, $b, $c, $d) {
       $this->code_eleve =  $code_eleve;
       $this->prenom_eleve = $prenom_eleve;
       $this->nom_eleve = $nom_eleve;
       $this->classe = $classe;
       $this->num_tel = $num_tel;
       $this->totalSeances = $a;
       $this->totalPaid = $b;
       $this->totalToPay = $c;
       $this->difference = $d;

    }
      


}