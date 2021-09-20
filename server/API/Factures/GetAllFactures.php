<?php
//imports
require "../../server.php";
require "../../../models/FactureModel.php";

//treatements ...
$database = new Database();
$db = $database->getConnection();

$loc = new FactureModel($db);
$locations = $loc->getAllFactures();
