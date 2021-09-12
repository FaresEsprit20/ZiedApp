<?php
//imports
require "../../server.php";
require "../../../models/GroupeModel.php";

//treatements ...
$database = new Database();
$db = $database->getConnection();

$loc = new GroupeModel($db);
$locations = $loc->DeleteGroup();
