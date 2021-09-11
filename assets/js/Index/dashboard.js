
$(document).ready(function(){
    
//get dashboard data
    $.ajax({    
        type: "GET",
        url: "http://localhost/Zied/server/Api/Dashboard/getIndexDashboard.php",                     
        dataType: "json",               
        success: function(data){      
          var jsonData = data;
          console.log("data loaded ....");
          console.log(jsonData);
          var reserv;
          var reservarchv;
          var loc;
          var locarchv;
          var grp;
          var grparchv;

          reserv = jsonData.reserv;
          reservarchv = jsonData.reserv2;
          loc = jsonData.loc;
          locarchv = jsonData.loc2;
          grp = jsonData.grp;
          grparchv = jsonData.grp;


         $("#reserv").append(reserv);
         $("#reservarchv").append(reservarchv);
         $("#loc").append(loc);
         $("#locarchv").append(locarchv)
         $("#grp").append(grp);
         $("#grparchv").append(grparchv);        

        },
        error: function (data) { alert("Server Error"); }
    });


//create reservation
 // this is the id of the form
 $("#createreservation").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
  
    var form = $(this);
    var isValid = false;
    var inputSalle = $("#inputSalle").val();
    console.log("input salle "+inputSalle);
    var inputHeure = $("#inputHeure").val();
    var inputJour = $("#inputJour").val();
    var inputHeure = $("#inputHeure").val();
    var inputMois = $("#inputMois").val();
    var inputAndeb = $("#inputAndeb").val();
    var inputHeureFin = $("#inputHeureFin").val();
    var inputJourFin = $("#inputJourFin").val();
    var inputHeureFin = $("#inputHeureFin").val();
    var inputMoisFin = $("#inputMoisFin").val();
    var inputAnfin = $("#inputAnfin").val();
    var inputEns = $("#inputens").val();
    var inputGroupe = $("#inputreservgroup").val();

if( inputSalle =="nil" ){
    isValid = false;
    $("#inputSalle").addClass("is-invalid");
    console.log(inputSalle);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputSalle").addClass("is-valid");
    console.log(isValid);
}

if( inputHeure =="nil" ){
    isValid = false;
    $("#inputHeure").addClass("is-invalid");
    console.log(inputSalle);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputHeure").addClass("is-valid");
    console.log(isValid);
}

if( inputJour =="nil" ){
    isValid = false;
    $("#inputJour").addClass("is-invalid");
    console.log(inputJour);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputJour").addClass("is-valid");
    console.log(isValid);
}

if( inputMois =="nil" ){
    isValid = false;
    $("#inputMois").addClass("is-invalid");
    console.log(inputMois);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputMois").addClass("is-valid");
    console.log(isValid);
}
if( inputAndeb =="nil" ){
    isValid = false;
    $("#inputAndeb").addClass("is-invalid");
    console.log(inputAndeb);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputAndeb").addClass("is-valid");
    console.log(isValid);
}
if( inputHeureFin =="nil" ){
    isValid = false;
    $("#inputHeureFin").addClass("is-invalid");
    console.log(inputHeureFin);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputHeureFin").addClass("is-valid");
    console.log(isValid);
}
if( inputJourFin =="nil" ){
    isValid = false;
    $("#inputJourFin").addClass("is-invalid");
    console.log(inputJourFin);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputJourFin").addClass("is-valid");
    console.log(isValid);
}
if( inputMoisFin =="nil" ){
    isValid = false;
    $("#inputMoisFin").addClass("is-invalid");
    console.log(inputMoisFin);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputMoisFin").addClass("is-valid");
    console.log(isValid);
}
if( inputAnfin =="nil" ){
    isValid = false;
    $("#inputAnFin").addClass("is-invalid");
    console.log(inputAndFin);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputAnFin").addClass("is-valid");
    console.log(isValid);
}
if( inputEns =="nil" ){
    isValid = false;
    $("#inputens").addClass("is-invalid");
    console.log(inputEns);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputens").addClass("is-valid");
    console.log(isValid);
}
if( inputGroupe =="nil" ){
    isValid = false;
    $("#inputreservgroup").addClass("is-invalid");
    console.log(inputGroupe);
    console.log(isValid);
    return false;
}else{
    isValid = true;
    $("#inputreservgroup").addClass("is-valid");
    console.log(isValid);
}


if(isValid == true){


    $.ajax({
           type: "POST",
           url: "http://localhost/Zied/server/Api/Reservations/AddReservation.php",
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

        }
  });



  
  });