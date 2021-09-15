

$(document).ready(function(){

//create reservation
// this is the id of the form
$("#createloc").submit(function(e) {

e.preventDefault(); // avoid to execute the actual submit of the form.

var form = $(this);
var isValid = false;
var inputJour = $("#inputJour").val();
var inputMois = $("#inputMois").val();
var inputAndeb = $("#inputAndeb").val();
var inputJourFin = $("#inputJourFin").val();
var inputMoisFin = $("#inputMoisFin").val();
var inputAnFin = $("#inputAnFin").val();


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


if( inputJourFin =="nil" ){
$("#ijf").css("visibility","visible");
isValid = false;
$("#inputJourFin").removeClass("is-valid");
$("#inputJourFin").addClass("is-invalid");
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




if((inputJour > inputJourFin) && (inputMois == inputMoisFin) && (inputAndeb == inputAnFin)){

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
return false;
}

if((inputMois > inputMoisFin)  && (inputAndeb == inputAnFin)){

$("#imf").css("visibility","visible");
isValid = false;
$("#inputMoisFin").removeClass("is-valid");
$("#inputMoisFin").addClass("is-invalid");
console.log(isValid);
$("#imf").removeClass("valid-feedback");
$("#imf").addClass("invalid-feedback");
$("#imf").html("Le mois de début doit etre inférieure ou égal au mois de fin");
return false;
}

if(inputMois > inputMoisFin){

    $("#imf").css("visibility","visible");
    isValid = false;
    $("#inputMoisFin").removeClass("is-valid");
    $("#inputMoisFin").addClass("is-invalid");
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
datedeb: $("#inputAndeb").val()+"-"+$("#inputMois").val()+"-"+$("#inputJour").val(),
datefin: $("#inputAnFin").val()+"-"+$("#inputMoisFin").val()+"-"+$("#inputJourFin").val(),
};
console.log("object" +JSON.stringify(object));
$.ajax({
       type: "POST",
       url: "http://localhost/Zied/server/Api/Locations/GetEmptyLocations.php",
       data: JSON.stringify(object),
       dataType: 'json',
       contentType: 'application/json',
       success: function(data)
       {
        //begin of treatements  



        var jsonData = data;
        console.log("Suite Vides data loaded ....");
        console.log(jsonData);

        if(jsonData.length == 0 ||jsonData == null || jsonData == undefined){
            var myModal = $("#reservmodal");
            myModal.modal("show");
        }

        for(item of jsonData){
           
            var row = "<tr>";
            row+='<td>'+item.ID_loc+'</td>';
            row+="<td>"+item.cin_loc+"</td>";
            row+="</td>";

          $("#tbodyL").append(row);
        }

        $('#locationsDatatable').css("visibility","visible");
        $('#locationsDatatable').DataTable();



       }
     });

    }
});







});