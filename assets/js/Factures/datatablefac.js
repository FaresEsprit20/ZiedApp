

$(document).ready(function(){


        
    function archvReserv($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Factures/ArchiverFacture.php",                     
            dataType: "json",            
            data: JSON.stringify($id),
            contentType: 'application/json',   
            success: function(data){     
              console.log("facture archived !");
              console.log(data);
            }
        });
    
    }

    function archvReservEns($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Factures/ArchiverFactureEns.php",                     
            dataType: "json",            
            data: JSON.stringify($id),
            contentType: 'application/json',   
            success: function(data){     
              console.log("facture ens archived !");
              console.log(data);
            }
        });
    
    }
    
    
       

$.ajax({
    type: "GET",
    url: "http://localhost/Zied/server/Api/Factures/GetAllFactures.php",
    dataType: 'json',
    success: function(data)
    {
        var jsonData = data;
         // show response from the php script.
         console.log("Factures data loaded ....");
           console.log(jsonData);
 
           for(item of jsonData){
               var row = "<tr>";
               row+='<td class="id_facture">'+item.id_facture+'</td>';
               row+="<td>"+item.id_eleve+"</td>";
               row+="<td>"+item.id_groupe+"</td>";
               row+="<td>"+item.nom_eleve+" "+item.prenom_eleve+"</td>";
               row+="<td>"+item.nom_groupe+"</td>";
               row+="<td>"+item.nbreseances+"</td>";
               row+="<td>"+item.prixseances+" DT"+"</td>";
               row+="<td>"+item.montantpaye+" DT"+"</td>";
               row+="<td>"+item.topay+" DT"+"</td>";
               row+="<td>"+item.dateheure+"</td>";
               row+='<td><div><button style="display:block;width:65px;" id="btnArchv"type="button" class="btn btn-dark">Archv</button></div></td>';
               row+="</td>";
 
             $("#tbodyGroupes").append(row);
           }

           $("#tbodyGroupes").on('click','#btnArchv', function(){
            var id =   $(this).closest('tr').find('.id_facture').text();
            var object = {
                id_facture: id
            }
            var jsonObject = JSON.stringify(object);
            console.log(object);
            if (confirm('Do you want to Archive?')) {
                archvReserv(object);
                location.reload();
            }else{
                return false;
            }
          });
          $('#reservationseDatatable').DataTable();

//treatements

$.ajax({
    type: "GET",
    url: "http://localhost/Zied/server/Api/Factures/GetAllEnsFactures.php",
    dataType: 'json',
    success: function(data)
    {
        var jsonData = data;
         // show response from the php script.
         console.log("Factures Enseignants data loaded ....");
           console.log(jsonData);
 
           for(item of jsonData){
               var row = "<tr>";
               row+='<td class="id_facture_ens">'+item.id_facture_ens+'</td>';
               row+="<td>"+item.id_locataire+"</td>";
               row+="<td>"+item.id_groupe+"</td>";
               row+="<td>"+item.nom+" "+item.prenom+"</td>";
               row+="<td>"+item.nom_groupe+"</td>";
               row+="<td>"+item.nbreseances+"</td>";
               row+="<td>"+item.prixseances+" DT"+"</td>";
               row+="<td>"+item.montantpaye+" DT"+"</td>";
               row+="<td>"+item.topay+" DT"+"</td>";
               row+="<td>"+item.dateheure+"</td>";
               row+='<td><div><button style="display:block;width:65px;" id="btnArchvens"type="button" class="btn btn-dark">Archv</button></div></td>';
               row+="</td>";
 
             $("#tbodyGroupesEns").append(row);
           }

           $("#tbodyGroupesEns").on('click','#btnArchvens', function(){
            var id =   $(this).closest('tr').find('.id_facture_ens').text();
            var object = {
                id_facture: id
            }
            var jsonObject = JSON.stringify(object);
            if (confirm('Do you want to Archive?')) {
                archvReservEns(object);
                location.reload();
            }else{
                return false;
            }
          });
          $('#reservationsensDatatable').DataTable();

    }
  });


    











    }
  });


    });