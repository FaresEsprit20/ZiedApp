<?php
//imports
require "../../server.php";
require "../../../models/DashboardModel.php";

//treatements ...
$database = new Database();
$db = $database->getConnection();

$loc = new DashboardModel($db);
$locations = $loc->getIndexDashboard();