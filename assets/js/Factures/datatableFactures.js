

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
                var id =   $(this).closest('tr').find('.id_groupe').text();
                var object = {
                    id_groupe: id
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
            
    
            },
            error: function (data) { alert("Server Error"); }
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