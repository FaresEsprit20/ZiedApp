<?php

//imports
require "../../server.php";
require "../../../models/ReservationModel.php";


//treatements ...
$database = new Database();
$db = $database->getConnection();


$loc = new ReservationModel($db);
$locataires = $loc->DeleteReservation();


