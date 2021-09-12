<?php

//imports
require "../../server.php";
require "../../../models/ReservationModel.php";
require "../../../models/LocatairesModel.php";
require "../../../models/LocationsModel.php";

//treatements ...
$database = new Database();
$db = $database->getConnection();
$loc = new ReservationModel($db);
$reserv = $loc->getReservationForm();







