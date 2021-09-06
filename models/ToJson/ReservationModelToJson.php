<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here



class ReservationModelToJson {

    //atributes
    public $id_reserv;
    public $id_loc;
    public $id_groupe;
    public $datedeb;
    public $datefin;
    public $heuredeb;
    public $heurefin;
    public $jourdeb;
    public $jourfin;
    public $moisdeb;
    public $moisfin;
    public $andeb;
    public $anfin;
    public $archiv_state = 0;

    //constructor
    public function __construct($id_reserv,$id_loc,$id_groupe,$datedeb,$datefin,$heuredeb,$heurefin,$jourdeb,$jourfin,
    $moisdeb,$moisfin,$andeb,$anfin,$archiv_state) {

        $this->$id_reserv = $id_reserv;
        $this->$id_loc   =  $id_loc;
        $this->$id_groupe  =  $id_groupe;
        $this->$datedeb   =  $datedeb;
        $this->$datefin   =  $datefin;
        $this->$heuredeb  =  $heuredeb;
        $this->$heurefin  =  $heurefin;
        $this->$jourdeb   =  $jourdeb;
        $this->$jourfin   =  $jourfin;
        $this->$moisdeb   =  $moisdeb;
        $this->$moisfin   =  $moisfin;
        $this->$andeb     =  $andeb;
        $this->$anfin     =  $anfin;
        $this->$archiv_state = $archiv_state;

    }
    


}