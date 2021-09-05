<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class LocationsModelToJson {

    //atributes
    public $id_loc;
    public $cin_loc;
    

    //constructor
    public function __construct( $id_loc, $cin_loc) {
       $this->id_loc  = $id_loc;
       $this->cin_loc = $cin_loc;
    }
    

}