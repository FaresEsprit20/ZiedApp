<?php

//imports
require "../../server.php";
require "../../../models/EleveModel.php";

//treatements ...
$database = new Database();
$db = $database->getConnection();

$loc = new EleveModel($db);
$locations = $loc->updateEleve();
