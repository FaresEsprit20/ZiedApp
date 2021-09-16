<?php

header('Access-Control-Allow-Origin: *');
 
// imports will be here

class EleveModel {

    //atributes
    public $code_eleve;
    public $prenom_eleve;
    public $nom_eleve;
    public $classe;
    public $num_tel;
    public $conn;
    

    //constructor
    public function __construct($db) {
       $this->conn = $db;
    }
    
    public function getAllElevesByGroup() {
        $stmt = $this->conn->prepare("SELECT * FROM  groupe_eleve");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result) ;
      
    }

    public function AddEleve() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        $selected = array();
       
        if(isset($data["selectedGroups"])){
            foreach($data["selectedGroups"] as $item){
            array_push($selected,$item);
            }
        }
     
        if( isset($data["prenom_eleve"]) and isset($data["nom_eleve"]) and isset($data["classe"]) and isset($data["num_tel"]) ){
        $stmt = $this->conn->prepare("INSERT INTO eleves VALUES(?,?,?,?,?) ");
        $stmt->execute([0,$data["prenom_eleve"],$data["nom_eleve"],$data["classe"],$data["num_tel"]]);
        $lastinsertedId = $this->conn->lastInsertId();
        foreach($selected as $item){
           
          $stmt2 = $this->conn->prepare("INSERT INTO groupe_eleve VALUES(?,?) ");
          $stmt2->execute([$item,$lastinsertedId]);
    }

        echo json_encode(http_response_code(201));
    }else {
        http_response_code(401);
        die();
    }
      
    }
 

    public function UpdateEleve() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["prenom_eleve"]) and isset($data["nom_eleve"]) and isset($data["classe"]) and isset($data["num_tel"]) ){
        $stmt = $this->conn->prepare(" UPDATE eleves SET prenom_eleve=?,nom_eleve=?,classe=?,num_tel=? ");
        $stmt->execute([$data["prenom_eleve"],$data["nom_eleve"],$data["classe"],$data["num_tel"]]);
        echo json_encode(http_response_code(201));
    }else {
        http_response_code(401);
        die();
    }
      
    }
    
    public function DeleteEleveById() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["code_eleve"]) ){
        $stmt = $this->conn->prepare("DELETE FROM eleves WHERE code_eleve = ? ");
        $stmt->execute([$data["code_eleve"]]);
        echo json_encode(http_response_code(201));
    }else {
        http_response_code(401);
        die();
    }
      
    }


    public function GetEleveById() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["code_eleve"]) ){
        $stmt = $this->conn->prepare("SELECT * FROM eleves WHERE code_eleve = ? ");
        $stmt->execute([$data["code_eleve"]]);
        echo json_encode(http_response_code(201));
    }else {
        http_response_code(401);
        die();
    }
      
    }

    public function GetAllEleves() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if(isset($data["code_eleve"]) ){
        $stmt = $this->conn->prepare("SELECT * FROM eleves ");
        $stmt->execute([$data["code_eleve"]]);
        echo json_encode(http_response_code(201));
    }else {
        http_response_code(401);
        die();
    }
      
    }




}