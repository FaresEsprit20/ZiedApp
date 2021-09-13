

$(document).ready(function(){


    function delReserv($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Groupes/DeleteGroupe.php",                     
            dataType: "json",            
            data: JSON.stringify($id),
            contentType: 'application/json',   
            success: function(data){     
              console.log("reservation deleted !");
              console.log(data);
            }
        });
    
    }
    
    
    function archvReserv($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Groupes/ArchiverGroupe.php",                     
            dataType: "json",            
            data: JSON.stringify($id),
            contentType: 'application/json',   
            success: function(data){     
              console.log("reservation archived !");
              console.log(data);
            }
        });
    
    }
    
    
        //get dashboard data
        $.ajax({    
            type: "GET",
            url: "http://localhost/Zied/server/Api/Groupes/GetGroups.php",                     
            dataType: "json",               
            success: function(data){      
              var jsonData = data;
              console.log("Groups data loaded ....");
              console.log(jsonData);
    
              for(item of jsonData){
                 
                  var row = "<tr>";
                  row+='<td class="id_groupe">'+item.id_groupe+'</td>';
                  row+="<td>"+item.nom_groupe+"</td>";
                  row+='<td><div><button id="btnDelete" style="display:block;width:65px;margin-bottom:5px;" type="button" class="btn btn-info">Del</button><button style="display:block;width:65px;" id="btnArchv"type="button" class="btn btn-dark">Archv</button></div></td>';
                  row+="</td>";
    
                $("#tbodyGroupes").append(row);
              }

              for(var item of jsonData){
                  var option = new Option(item.nom_groupe,item.id_groupe);
                $("#group_id").append(option);
              }
              
              $("#tbodyGroupes").on('click','#btnDelete', function(){
                var id =   $(this).closest('tr').find('.id_groupe').text();
                var object = {
                    id_groupe: id
                }
              
               
                if (confirm('Do you want to Delete?')) {
                    delReserv(object);
                    location.reload();
                }else{
                    return false;
                }
               
              });
              $("#tbodyGroupes").on('click','#btnArchv', function(){
                var id =   $(this).closest('tr').find('.id_reserv').text();
                var object = {
                    id_reserv: id
                }
                var jsonObject = JSON.stringify(object);
                if (confirm('Do you want to Archive?')) {
                    archvReserv(object);
                    location.reload();
                }else{
                    return false;
                }
              });
              $('#reservationsDatatable').DataTable();
            
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

        if( inputSalle =="nil" || inputSalle.length < 3){
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
        id_groupe: $("#group_id").val(),
        nom_groupe: $("#group_name").val(),
        };
        console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Groupes/UpdateGroup.php",
               data: JSON.stringify(object),
               dataType: 'json',
               contentType: 'application/json',
               success: function(data)
               {
                   console.log(data);
                    // show response from the php script.
                    var myModal = $("#reservmodal");
                    myModal.modal("show");
                    document.getElementById("creategroup").reset();
                    
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
    $("#creategroup").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var inputSalle = $("#nom_groupe").val();
       
        
        if( inputSalle =="nil" || inputSalle.length < 3){
        $("#is").css("visibility","visible");
        isValid = false;
        $("#nom_groupe").removeClass("is-valid");
        $("#nom_groupe").addClass("is-invalid");
        console.log(inputSalle);
        console.log(isValid);
        $("#is").removeClass("valid-feedback");
        $("#is").addClass("invalid-feedback");
        $("#is").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#is").css("visibility","visible");
        $("#nom_groupe").removeClass("is-invalid");
        $("#nom_groupe").addClass("is-valid");
        console.log(isValid);
        $("#is").removeClass("invalid-feedback");
        $("#is").addClass("valid-feedback");
        $("#is").html("Champ valide");
        }
        
       
        
        if(isValid == true){
        
        let object = {
        nom_groupe: $("#nom_groupe").val(),
        };
        console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Groupes/AddGroup.php",
               data: JSON.stringify(object),
               dataType: 'json',
               contentType: 'application/json',
               success: function(data)
               {
                   console.log(data);
                    // show response from the php script.
                    var myModal = $("#reservmodal");
                    myModal.modal("show");
                    document.getElementById("creategroup").reset();
                    
                    setTimeout(function(){ location.replace("index.php"); }, 6000);
               }
             });
        
            }
        });










    });