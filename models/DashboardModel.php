<?php

header('Access-Control-Allow-Origin: *');
require "ToJson/DashboardModelToJson.php";
 
// imports will be here

class DashboardModel {

    //atributes
    public $conn;
    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    
    public function getIndexDashboard() {
        $stmt1 = $this->conn->prepare("SELECT COUNT(id_reserv) as count FROM  reservation WHERE archive_state = 0 ");
        $stmt1->execute();
        $reserv = $stmt1->fetchAll(PDO::FETCH_ASSOC);
        $reservCount = intVal($reserv[0]["count"]);
        $stmt2 = $this->conn->prepare("SELECT COUNT(id_reserv) as count FROM  reservation WHERE archive_state = 1 ");
        $stmt2->execute();
        $reserv2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        $reservCount2 = intVal($reserv2[0]["count"]);
 
        $stmt3 = $this->conn->prepare("SELECT COUNT(id_locataire) as count FROM locataires WHERE archiver_state = 0 ");
        $stmt3->execute();
        $loc = $stmt3->fetchAll(PDO::FETCH_ASSOC);
        $locCount = intVal($loc[0]["count"]);

        $stmt4 = $this->conn->prepare("SELECT COUNT(id_locataire) as count FROM locataires WHERE archiver_state = 1 ");
        $stmt4->execute();
        $loc2 = $stmt4->fetchAll(PDO::FETCH_ASSOC);
        $locCount2 = intVal($loc2[0]["count"]);

        $stmt5 = $this->conn->prepare("SELECT COUNT(id_groupe) as count FROM groupe WHERE archive_state = 0 ");
        $stmt5->execute();
        $grp = $stmt5->fetchAll(PDO::FETCH_ASSOC);
        $grpCount = intVal($grp[0]["count"]);
 
 
        $stmt6 = $this->conn->prepare("SELECT COUNT(id_groupe) as count FROM groupe WHERE archive_state = 1 ");
        $stmt6->execute();
        $grp2 = $stmt6->fetchAll(PDO::FETCH_ASSOC);
        $grpCount2 = intVal($grp2[0]["count"]);

        $object = new DashboardModelToJson($reservCount,$reservCount2,$locCount,$locCount2,$grpCount,$grpCount2);
        echo json_encode($object);

    }




}