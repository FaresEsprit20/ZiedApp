<?php

//imports
require "../../server.php";
require "../../../models/SeanceModel.php";


//treatements ...
$database = new Database();
$db = $database->getConnection();


$loc = new SeancesModel($db);
$locataires = $loc->getAllSeances();


