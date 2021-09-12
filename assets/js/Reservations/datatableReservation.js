

$(document).ready(function(){

    $('#locationsDatatable').DataTable();


//get Reservation Form data
$.ajax({    
    type: "GET",
    url: "http://localhost/Zied/server/Api/Reservations/getReservationForm.php",                     
    dataType: "json",               
    success: function(data){      
      var jsonData = data;
      console.log("Reservation Form data loaded ....");
      console.log(jsonData);
    
      var locataires = [];
      var locations = [];
      var groupes = [];

      for(let item of jsonData.locataires){
          locataires.push(item);
      }
      for(let item of jsonData.locations){
        locations.push(item);
    }
    for(let item of jsonData.groupes){
        groupes.push(item);
    }
    console.log(locataires);
    console.log(locations);
    console.log(groupes);

for(var item of locataires){
var option =  new Option(item.nom+' '+item.prenom, item.id_locataire);
$("#inputens").append(option);
}
for(var item of locations){
var option =  new Option(item.cin_loc, item.ID_loc);
$("#inputSalle").append(option);
}
for(var item of groupes){
var option =  new Option(item.nom_groupe, item.nom_groupe);
$("#inputreservgroup").append(option);
}


//create reservation
// this is the id of the form
$("#createreservation").submit(function(e) {

e.preventDefault(); // avoid to execute the actual submit of the form.

var form = $(this);
var isValid = false;
var inputSalle = $("#inputSalle").val();
var inputHeure = $("#inputHeure").val();
var inputJour = $("#inputJour").val();
var inputHeure = $("#inputHeure").val();
var inputMois = $("#inputMois").val();
var inputAndeb = $("#inputAndeb").val();
var inputHeureFin = $("#inputHeureFin").val();
var inputJourFin = $("#inputJourFin").val();
var inputHeureFin = $("#inputHeureFin").val();
var inputMoisFin = $("#inputMoisFin").val();
var inputAnFin = $("#inputAnFin").val();
var inputEns = $("#inputens").val();
var inputGroupe = $("#inputreservgroup").val();

if( inputSalle =="nil" ){
$("#is").css("visibility","visible");
isValid = false;
$("#inputSalle").removeClass("is-valid");
$("#inputSalle").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#is").removeClass("valid-feedback");
$("#is").addClass("invalid-feedback");
$("#is").html("Champ invalide");
return false;
}else{
isValid = true;
$("#is").css("visibility","visible");
$("#inputSalle").removeClass("is-invalid");
$("#inputSalle").addClass("is-valid");
console.log(isValid);
$("#is").removeClass("invalid-feedback");
$("#is").addClass("valid-feedback");
$("#is").html("Champ valide");
}

if( inputHeure =="nil"){
$("#ih").css("visibility","visible");
isValid = false;
$("#inputHeure").removeClass("is-valid");
$("#inputHeure").addClass("is-invalid");
console.log(inputHeure);
console.log(isValid);
$("#ih").removeClass("valid-feedback");
$("#ih").addClass("invalid-feedback");
$("#ih").html("Champ invalide");
return false;
}else{
isValid = true;
$("#ih").css("visibility","visible");
$("#inputHeure").removeClass("is-invalid");
$("#inputHeure").addClass("is-valid");
console.log(isValid);
$("#ih").removeClass("invalid-feedback");
$("#ih").addClass("valid-feedback");
$("#ih").html("Champ valide");
}

if( inputJour =="nil"){
$("#ij").css("visibility","visible");
isValid = false;
$("#inputJour").removeClass("is-valid");
$("#inputJour").addClass("is-invalid");
console.log(inputJour);
console.log(isValid);
$("#ij").removeClass("valid-feedback");
$("#ij").addClass("invalid-feedback");
$("#ij").html("Champ invalide");
return false;
}else{
isValid = true;
$("#ij").css("visibility","visible");
$("#inputJour").removeClass("is-invalid");
$("#inputJour").addClass("is-valid");
console.log(isValid);
$("#ij").removeClass("invalid-feedback");
$("#ij").addClass("valid-feedback");
$("#ij").html("Champ valide");
}

if( inputMois =="nil"){
$("#im").css("visibility","visible");
isValid = false;
$("#inputMois").removeClass("is-valid");
$("#inputMois").addClass("is-invalid");
console.log("mois");
console.log(inputMois);
console.log(isValid);
$("#im").removeClass("valid-feedback");
$("#im").addClass("invalid-feedback");
$("#im").html("Champ invalide");
return false;
}else{
isValid = true;
$("#im").css("visibility","visible");
$("#inputMois").removeClass("is-invalid");
$("#inputMois").addClass("is-valid");
console.log("mois");
console.log(inputMois);
console.log(isValid);
$("#im").removeClass("invalid-feedback");
$("#im").addClass("valid-feedback");
$("#im").html("Champ valide");
}

if( inputAndeb =="nil"){
$("#ia").css("visibility","visible");
isValid = false;
$("#inputAndeb").removeClass("is-valid");
$("#inputAndeb").addClass("is-invalid");
console.log(inputAndeb);
console.log(isValid);
$("#ia").removeClass("valid-feedback");
$("#ia").addClass("invalid-feedback");
$("#ia").html("Champ invalide");
return false;
}else{
isValid = true;
$("#ia").css("visibility","visible");
$("#inputAndeb").removeClass("is-invalid");
$("#inputAndeb").addClass("is-valid");
console.log(isValid);
console.log("andeb");
console.log(inputAndeb);
$("#ia").removeClass("invalid-feedback");
$("#ia").addClass("valid-feedback");
$("#ia").html("Champ valide");
}


if( inputHeureFin =="nil" ){
$("#ihf").css("visibility","visible");
isValid = false;
$("#inputHeureFin").removeClass("is-valid");
$("#inputHeureFin").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#ihf").removeClass("valid-feedback");
$("#ihf").addClass("invalid-feedback");
$("#ihf").html("Champ invalide");
return false;
}else{
isValid = true;
$("#ihf").css("visibility","visible");
$("#inputHeureFin").removeClass("is-invalid");
$("#inputHeureFin").addClass("is-valid");
console.log(isValid);
$("#ihf").removeClass("invalid-feedback");
$("#ihf").addClass("valid-feedback");
$("#ihf").html("Champ valide");
}
if( inputJourFin =="nil" ){
$("#ijf").css("visibility","visible");
isValid = false;
$("#inputJourFin").removeClass("is-valid");
$("#inputJourFin").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#ijf").removeClass("valid-feedback");
$("#ijf").addClass("invalid-feedback");
$("#ijf").html("Champ invalide");
return false;
}else{
isValid = true;
$("#ijf").css("visibility","visible");
$("#inputJourFin").removeClass("is-invalid");
$("#inputJourFin").addClass("is-valid");
console.log(isValid);
$("#ijf").removeClass("invalid-feedback");
$("#ijf").addClass("valid-feedback");
$("#ijf").html("Champ valide");
}
if( inputMoisFin =="nil" ){
$("#imf").css("visibility","visible");
isValid = false;
$("#inputMoisFin").removeClass("is-valid");
$("#inputMoisFin").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#imf").removeClass("valid-feedback");
$("#imf").addClass("invalid-feedback");
$("#imf").html("Champ invalide");
return false;
}else{
isValid = true;
$("#imf").css("visibility","visible");
$("#inputMoisFin").removeClass("is-invalid");
$("#inputMoisFin").addClass("is-valid");
console.log(isValid);
$("#imf").removeClass("invalid-feedback");
$("#imf").addClass("valid-feedback");
$("#imf").html("Champ valide");
}

if( inputAnFin =="nil" ){
$("#iaf").css("visibility","visible");
isValid = false;
$("#inputAnFin").removeClass("is-valid");
$("#inputAnFin").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#iaf").removeClass("valid-feedback");
$("#iaf").addClass("invalid-feedback");
$("#iaf").html("Champ invalide");
return false;
}else{
isValid = true;
$("#iaf").css("visibility","visible");
$("#inputAnFin").removeClass("is-invalid");
$("#inputAnFin").addClass("is-valid");
console.log(isValid);
$("#iaf").removeClass("invalid-feedback");
$("#iaf").addClass("valid-feedback");
$("#iaf").html("Champ valide");
}


if( inputEns =="nil" ){
$("#iens").css("visibility","visible");
isValid = false;
$("#inputens").removeClass("is-valid");
$("#inputens").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#iens").removeClass("valid-feedback");
$("#iens").addClass("invalid-feedback");
$("#iens").html("Champ invalide");
return false;
}else{
isValid = true;
$("#iens").css("visibility","visible");
$("#inputens").removeClass("is-invalid");
$("#inputens").addClass("is-valid");
console.log(isValid);
$("#iens").removeClass("invalid-feedback");
$("#iens").addClass("valid-feedback");
$("#iens").html("Champ valide");
}


if( inputGroupe =="nil" ){
$("#igrp").css("visibility","visible");
isValid = false;
$("#inputreservgroup").removeClass("is-valid");
$("#inputreservgroup").addClass("is-invalid");
console.log(inputSalle);
console.log(isValid);
$("#igrp").removeClass("valid-feedback");
$("#igrp").addClass("invalid-feedback");
$("#igrp").html("Champ invalide");
return false;
}else{
isValid = true;
$("#igrp").css("visibility","visible");
$("#inputreservgroup").removeClass("is-invalid");
$("#inputreservgroup").addClass("is-valid");
console.log(isValid);
$("#igrp").removeClass("invalid-feedback");
$("#igrp").addClass("valid-feedback");
$("#igrp").html("Champ valide");
}

if((inputHeure >= inputHeureFin) && (inputJour == inputJourFin) && (inputMois == inputMoisFin) && (inputAndeb == inputAnFin)){
if(inputHeure == inputHeureFin){
    console.log("equal hours");
}else {
    console.log("not equal hours");
}
if(inputJour == inputJourFin){
    console.log("equal days");
}else {
    console.log("not equal days");
}
if(inputAndeb == inputAnFin){
    console.log("equal years");
}else {
    console.log("not equal years");
}
$("#ih").css("visibility","visible");
isValid = false;
$("#inputHeure").removeClass("is-valid");
$("#inputHeure").addClass("is-invalid");
console.log(inputHeure);
console.log(isValid);
$("#ih").removeClass("valid-feedback");
$("#ih").addClass("invalid-feedback");
$("#ih").html("L'heure de début doit etre inférieure a l'heure de fin du meme mois et année");
return false;
}

if((inputMois >= inputMoisFin)  && (inputAndeb == inputAnFin)){

$("#imf").css("visibility","visible");
isValid = false;
$("#inputMoisFin").removeClass("is-valid");
$("#inputMoisFin").addClass("is-invalid");
console.log(inputHeure);
console.log(isValid);
$("#imf").removeClass("valid-feedback");
$("#imf").addClass("invalid-feedback");
$("#imf").html("Le mois de début doit etre inférieure ou égal au mois de fin");
return false;
}

if((inputJour > inputJourFin) && (inputMois == inputMoisFin)  && (inputAndeb == inputAnFin)){

$("#ijf").css("visibility","visible");
isValid = false;
$("#inputJourFin").removeClass("is-valid");
$("#inputJourFin").addClass("is-invalid");
console.log(inputHeure);
console.log(isValid);
$("#ijf").removeClass("valid-feedback");
$("#ijf").addClass("invalid-feedback");
$("#ijf").html("Le jour de début doit etre inférieure ou égal au jour de fin");
return false;
}

if(inputAndeb > inputAnFin){
$("#iaf").css("visibility","visible");
isValid = false;
$("#inputAnFin").removeClass("is-valid");
$("#inputAnFin").addClass("is-invalid");
console.log(inputAndeb);
console.log(isValid);
$("#iaf").removeClass("valid-feedback");
$("#iaf").addClass("invalid-feedback");
$("#iaf").html("L'an de début doit etre égale ou inférieure a l'an de fin");
return false;
}

if(isValid == true){

let object = {
id_loc: $("#inputSalle").val(),
id_locataire: $("#inputens").val(),
id_groupe: $("#inputreservgroup option:selected").text(),
datedeb: $("#inputAndeb").val()+"-"+$("#inputMois").val()+"-"+$("#inputJour").val(),
datefin: $("#inputAnFin").val()+"-"+$("#inputMoisFin").val()+"-"+$("#inputJourFin").val(),
heuredeb: $("#inputHeure").val(),
jourdeb: $("#inputJour").val(),
moisdeb: $("#inputMois").val(),
andeb: $("#inputAndeb").val(),
heurefin: $("#inputHeureFin").val(),
jourfin: $("#inputJourFin").val(),
moisfin: $("#inputMoisFin").val(),
anfin: $("#inputAnFin").val()
};
console.log("object" +JSON.stringify(object));
$.ajax({
       type: "POST",
       url: "http://localhost/Zied/server/Api/Reservations/AddReservation.php",
       data: JSON.stringify(object),
       dataType: 'json',
       contentType: 'application/json',
       success: function(data)
       {
           console.log(data);
            // show response from the php script.
            var myModal = $("#reservmodal");
            myModal.modal("show");
           
       }
     });

    }
});




    },
    error: function (data) { alert("Server Error"); }
});


});