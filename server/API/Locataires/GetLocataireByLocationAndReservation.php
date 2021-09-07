<?php

//imports
require "../../server.php";
require "../../../models/LocatairesModel.php";


//treatements ...
$database = new Database();
$db = $database->getConnection();


$loc = new LocatairesModel($db);
$locataires = $loc->getLocataireByLocationAndReservation();


