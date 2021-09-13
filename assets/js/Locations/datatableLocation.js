

$(document).ready(function(){

    
        //get dashboard data
        $.ajax({    
            type: "GET",
            url: "http://localhost/Zied/server/Api/Locations/GetAllLocations.php",                     
            dataType: "json",               
            success: function(data){      
              var jsonData = data;
              console.log("Locations data loaded ....");
              console.log(jsonData);
    
              for(item of jsonData){
                 
                  var row = "<tr>";
                  row+='<td>'+item.ID_loc+'</td>';
                  row+="<td>"+item.cin_loc+"</td>";
                  row+="</td>";
    
                $("#tbodyL").append(row);
              }

              for(var item of jsonData){
                  var option = new Option(item.cin_loc,item.ID_loc);
                $("#group_id").append(option);
              }
              

              $('#locationsDatatable').DataTable();
            
                   //edit group
    // this is the id of the form
    $("#editgroup").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var inputSalle = $("#group_name").val();
        var idgroup = $("#group_id").val();
       
        
        if( idgroup =="nil"){
            $("#ig").css("visibility","visible");
            isValid = false;
            $("#group_id").removeClass("is-valid");
            $("#group_id").addClass("is-invalid");
            console.log(inputSalle);
            console.log(isValid);
            $("#ig").removeClass("valid-feedback");
            $("#ig").addClass("invalid-feedback");
            $("#ig").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#ig").css("visibility","visible");
            $("#group_id").removeClass("is-invalid");
            $("#group_id").addClass("is-valid");
            console.log(isValid);
            $("#ig").removeClass("invalid-feedback");
            $("#ig").addClass("valid-feedback");
            $("#ig").html("Champ valide");
            }

        if( inputSalle =="nil" ){
        $("#iss").css("visibility","visible");
        isValid = false;
        $("#group_name").removeClass("is-valid");
        $("#group_name").addClass("is-invalid");
        console.log(inputSalle);
        console.log(isValid);
        $("#iss").removeClass("valid-feedback");
        $("#iss").addClass("invalid-feedback");
        $("#iss").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#iss").css("visibility","visible");
        $("#group_name").removeClass("is-invalid");
        $("#group_name").addClass("is-valid");
        console.log(isValid);
        $("#iss").removeClass("invalid-feedback");
        $("#iss").addClass("valid-feedback");
        $("#iss").html("Champ valide");
        }
        
       
        
        if(isValid == true){
        
        let object = {
        ID_loc: $("#group_id").val(),
        cin_loc: $("#group_name").val(),
        };
        console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Locations/UpdateLocation.php",
               data: JSON.stringify(object),
               dataType: 'json',
               contentType: 'application/json',
               success: function(data)
               {
                   console.log(data);
                    // show response from the php script.
                    var myModal = $("#reservmodal");
                    myModal.modal("show");
                    document.getElementById("editgroup").reset();
                    
                    setTimeout(function(){ location.replace("index.php"); }, 6000);
               }
             });
        
            }
        });
    
    
            },
            error: function (data) { alert("Server Error"); }
        });
    
    

    //create reservation
    // this is the id of the form
    $("#createloc").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var inputSalle = $("#nom_location").val();
       
        
        if( inputSalle =="nil" ){
        $("#is").css("visibility","visible");
        isValid = false;
        $("#nom_location").removeClass("is-valid");
        $("#nom_location").addClass("is-invalid");
        console.log(inputSalle);
        console.log(isValid);
        $("#is").removeClass("valid-feedback");
        $("#is").addClass("invalid-feedback");
        $("#is").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#is").css("visibility","visible");
        $("#nom_location").removeClass("is-invalid");
        $("#nom_location").addClass("is-valid");
        console.log(isValid);
        $("#is").removeClass("invalid-feedback");
        $("#is").addClass("valid-feedback");
        $("#is").html("Champ valide");
        }
        
       
        
        if(isValid == true){
        
        let object = {
        cin_loc: $("#nom_location").val(),
        };
        console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Locations/AddNewLocation.php",
               data: JSON.stringify(object),
               dataType: 'json',
               contentType: 'application/json',
               success: function(data)
               {
                   console.log(data);
                    // show response from the php script.
                    var myModal = $("#reservmodal");
                    myModal.modal("show");
                    document.getElementById("createloc").reset();
                    
                    setTimeout(function(){ location.replace("index.php"); }, 6000);
               }
             });
        
            }
        });










    });