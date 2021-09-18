

$(document).ready(function(){
        
  function btnAbsent($id){

    //get dashboard data
    $.ajax({    
        type: "POST",
        url: "http://localhost/Zied/server/Api/Eleves/SetEleveState.php",                     
        dataType: "json",            
        data: JSON.stringify($id),
        contentType: 'application/json',   
        success: function(data){     
          console.log("eleve abscent !");
          console.log(data);
        }
    });

}


function btnPresent($id){

  //get dashboard data
  $.ajax({    
      type: "POST",
      url: "http://localhost/Zied/server/Api/Eleves/DeleteEleveState.php",                     
      dataType: "json",            
      data: JSON.stringify($id),
      contentType: 'application/json',   
      success: function(data){     
        console.log("eleve present !");
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
               $.ajax({
                type: "GET",
                url: "http://localhost/Zied/server/Api/Seances/getSeancesByGroupAndLocataire.php",
                dataType: 'json',
                success: function(data)
                {
                    var jsonData = data;
                    console.log(jsonData);
                 //treatements  
                 for(item of jsonData){   
                     var row = "<tr>";
                     row+='<td class="seance_id">'+item.id_seance+'</td>';
                     row+='<td class="locataire_ids">'+item.id_locataire+'</td>';
                     row+='<td class="groupe_ids" >'+item.id_groupe+'</td>';
                     row+="<td>"+item.nom+" "+item.prenom+"</td>";
                     row+="<td>"+item.nom_groupe+"</td>";
                     row+="<td>"+item.date+"</td>";
                     row+="<td>"+item.heure+"</td>";
                     row+='<td><div><button id="btnDelete" style="display:block;width:45px;margin-bottom:5px;" type="button" class="btn btn-info"><i class="fa fa-eye"></button>';
                     row+="</td>";
       
                   $("#tbodySeances").append(row);
                 }
                 $("#seancesDatatable").DataTable();

                 $("#tbodySeances").on('click','#btnDelete', function(){
                     var ids = $(this).closest('tr').find('.seance_id').text();
                     var idg = $(this).closest('tr').find('.groupe_ids').text();
                     var object = {
                         id_seance: ids,
                         id_groupe: idg
                     }
          console.log(object);

             $.ajax({
              type: "POST",
              url: "http://localhost/Zied/server/Api/Seances/getSeancesByEleves.php",
              data: JSON.stringify(object),
              dataType: 'json',
              contentType: 'application/json',
                success: function(data)
                {
             //Treatements
         
             var jsonData = data;
             console.log(jsonData);
          //treatements  
          for(item of jsonData){   
              var row = "<tr>";
              row+='<td class="seance_idsx">'+item.id_seance+'</td>';
              row+='<td class="groupe_idx" >'+item.id_groupe+'</td>';
              row+='<td class="eleve_idx" >'+item.id_eleve+'</td>';
              row+="<td>"+item.nom_groupe+"</td>";
              row+="<td>"+item.prenom_eleve+"</td>";
              row+="<td>"+item.nom_eleve+"</td>";
              row+="<td>"+item.classe+"</td>";
              row+="<td>"+item.num_tel+"</td>";
              row+="<td>"+item.date+"</td>";
              row+="<td>"+item.heure+"</td>";
              row+="<td>"+item.payement+" DT" +"</td>";
              row+="<td>"+item.absents+"</td>";
              row+='<td><div><button id="btnAbsent" style="display:block;width:70px;margin-bottom:5px;" type="button" class="btn btn-info">Absent</button><button id="btnPresent" style="display:block;width:70px;margin-bottom:5px;" type="button" class="btn btn-secondary">Présent</button></div>';
              row+="</td>";

            $("#tbodyGroupes").append(row);
          }
          $("#tbodyGroupes").on('click','#btnAbsent', function(){
            var ids =   $(this).closest('tr').find('.seance_idsx').text();
            var ide =   $(this).closest('tr').find('.eleve_idx').text();
            var object = {
                id_seance: ids,
                id_eleve: ide
            }
            var jsonObject = JSON.stringify(object);
            console.log(object);
            if (confirm('Do you want to put Absent ?')) {
                btnAbsent(object);
                location.reload();
            }else{
                return false;
            }
           
          });
          $("#tbodyGroupes").on('click','#btnPresent', function(){
            var ids =   $(this).closest('tr').find('.seance_idsx').text();
            var ide =   $(this).closest('tr').find('.eleve_idx').text();
            var object = {
                id_seance: ids,
                id_eleve: ide
            }
            var jsonObject = JSON.stringify(object);
            console.log(object);
           
            if (confirm('Do you want to put Present ?')) {
                btnPresent(object);
                location.reload();
            }else{
                return false;
            }
           
          });
          $("#reservationsDatatable").DataTable();


                }

              });
                   

                    
                   });
     
 
                }
              });

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
                                setTimeout(function(){ location.replace("index.php"); }, 6000);
                                
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