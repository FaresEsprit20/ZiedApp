<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class ReservationFormToJson {

    //atributes
    public $locataires;
    public $locations;
    public $groupes;
    
   
    //constructor
    public function __construct($locataires,$locations,$groupes) {
       $this->locataires =  $locataires;
       $this->locations = $locations;
       $this->groupes = $groupes;
    }
      

}