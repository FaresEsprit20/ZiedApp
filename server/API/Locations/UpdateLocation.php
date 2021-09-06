<?php
//imports
require "../../server.php";
require "../../../models/LocationsModel.php";

//treatements ...
$database = new Database();
$db = $database->getConnection();

$loc = new LocationsModel($db);
$locations = $loc->UpdateLocation();