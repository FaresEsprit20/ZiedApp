

$(document).ready(function(){


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
      row+='<td><div><button id="btnAbsent" style="display:block;width:70px;margin-bottom:5px;" type="button" class="btn btn-info">Absent</button></div>';
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

  
  $("#reservationsDatatable").DataTable();


        }

      });
           

            
           });


        }
      });

    
    

    //create reservation
    // this is the id of the form
    $("#creategroup").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = true;
        var inputSeance = $("#id_seance").val();
        var inputEleve = $("#eleve_id").val();
        var inputPayement = $("#payement_id").val();
        
        
        if(isValid == true){
        
        let object = {
          id_seance: inputSeance,
          id_eleve: inputEleve,
          payement: inputPayement
        };
        console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Factures/PayerSeance.php",
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
               },
               error: function (data) {
                var myModals = $("#reservmodalerr");
                myModals.modal("show");
                }
             });
        
            }
        });





    });