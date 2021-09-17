

$(document).ready(function(){
        
    
        //get dashboard data
        $.ajax({    
            type: "GET",
            url: "http://localhost/Zied/server/Api/Groupes/GetGroups.php",                     
            dataType: "json",               
            success: function(data){      
              var jsonData = data;
              console.log("Groups data loaded ....");
              console.log(jsonData);
              $("#reservationsDatatable").DataTable();


              for(var item of jsonData){
                  var option = new Option(item.nom_groupe,item.id_groupe);
                $("#group_id").append(option);
              }
              for(var item of jsonData){
                var option = new Option(item.nom_groupe,item.id_groupe);
              $("#group_ides").append(option);
            }

            $.ajax({
                type: "GET",
                url: "http://localhost/Zied/server/Api/Locataires/getLocataires.php",
                dataType: 'json',
                success: function(data)
                {
               //locataires treatements
               var jsonData = data;
               console.log("locataires data loaded");
               console.log(jsonData);
               for(var item of jsonData){
                var option = new Option(item.nom + " " + item.prenom ,item.id_locataire);
              $("#loc_id").append(option);
               }

     $("#editseance").submit(function(e) {
    
                e.preventDefault(); 
               var isValid = false;
               var inputGroup = $("#group_ides").val();
               var inputLoc = $("#loc_id").val();
               var inputHour = $("#hour_id").val();
               var inputDate = $("#date_id").val();

        if( inputGroup == "nil"){
            $("#ige").css("visibility","visible");
            isValid = false;
            $("#group_ides").removeClass("is-valid");
            $("#group_ides").addClass("is-invalid");
            console.log(isValid);
            $("#ige").removeClass("valid-feedback");
            $("#ige").addClass("invalid-feedback");
            $("#ige").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#ige").css("visibility","visible");
            $("#group_ides").removeClass("is-invalid");
            $("#group_ides").addClass("is-valid");
            console.log(isValid);
            $("#ige").removeClass("invalid-feedback");
            $("#ige").addClass("valid-feedback");
            $("#ige").html("Champ valide");
            }
            if( inputLoc == "nil"){
                $("#il").css("visibility","visible");
                isValid = false;
                $("#loc_id").removeClass("is-valid");
                $("#loc_id").addClass("is-invalid");
                console.log(isValid);
                $("#il").removeClass("valid-feedback");
                $("#il").addClass("invalid-feedback");
                $("#il").html("Champ invalide");
                return false;
                }else{
                isValid = true;
                $("#il").css("visibility","visible");
                $("#loc_id").removeClass("is-invalid");
                $("#loc_id").addClass("is-valid");
                console.log(isValid);
                $("#il").removeClass("invalid-feedback");
                $("#il").addClass("valid-feedback");
                $("#il").html("Champ valide");
                }
                if(isValid == true){

                    let object = {
                    id_locataire: inputLoc,
                    id_groupe: inputGroup,
                    date: inputDate,
                    heure: inputHour
                    };
                    console.log("object" +JSON.stringify(object));
                    $.ajax({
                           type: "POST",
                           url: "http://localhost/Zied/server/Api/Seances/AddSeance.php",
                           data: JSON.stringify(object),
                           dataType: 'json',
                           contentType: 'application/json',
                           success: function(data)
                           {
                               console.log(data);
                                // show response from the php script.
                                var myModal = $("#reservmodal");
                                myModal.modal("show");
                                document.getElementById("editseance").reset();
                                
                                setTimeout(function(){ location.reload(); }, 6000);
                           }
                         });
                    
                        }
                    });


                }
            });

                   //edit group
    // this is the id of the form
    $("#editgroup").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var inputGroup = $("#group_id").val();

        if( inputGroup == "nil"){
            $("#ig").css("visibility","visible");
            isValid = false;
            $("#group_id").removeClass("is-valid");
            $("#group_id").addClass("is-invalid");
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
            
        if(isValid == true){
            let object = {
                id_groupe: inputGroup,
           };
           console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Eleves/getElevesByGroup.php",
               data: JSON.stringify(object),
               dataType: 'json',
               contentType: 'application/json',
               success: function(data)
               {
                   var jsonData = data;
                   console.log(jsonData);
                //treatements  
                for(item of jsonData){   
                    var row = "<tr>";
                    row+='<td class="group_id"'+item.id_groupe+'</td>';
                    row+='<td class="eleve_id">'+item.code_eleve+'</td>';
                    row+="<td>"+item.nom_groupe+"</td>";
                    row+="<td>"+item.prenom_eleve+"</td>";
                    row+="<td>"+item.nom_eleve+"</td>";
                    row+="<td>"+item.classe+"</td>";
                    row+="<td>"+item.num_tel+"</td>";
                    row+='<td><div><button id="btnDelete" style="display:block;width:45px;margin-bottom:5px;" type="button" class="btn btn-info"><i class="fa fa-bandcamp"></button>';
                    row+="</td>";
      
                  $("#tbodyGroupes").append(row);
                }
               
                $("#tbodyGroupes").on('click','#btnDelete', function(){
                    var id = $(this).closest('tr').find('.group_id').text();
                    var object = {
                        code_eleve: id
                    }
                   
                   
                  });
    

               }
             });
        
            }
        });
    
    
            },
            error: function (data) { alert("Server Error"); }
        });
    
    






    });