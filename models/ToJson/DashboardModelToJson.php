<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class DashboardModelToJson {

    //atributes
    public $reserv;
    public $reserv2;
    public $loc;
    public $loc2;
    public $grp;
    public $grp2;
   
    

    //constructor
    public function __construct($reserv,$reserv2,$loc,$loc2,$grp,$grp2) {
       $this->reserv =  intVal($reserv);
       $this->reserv2 = intVal($reserv2);
       $this->loc =     intVal($loc);
       $this->loc2 =    intVal($loc2);
       $this->grp =     intVal($grp);
       $this->grp2 =    intVal($grp2);
    }
      


}