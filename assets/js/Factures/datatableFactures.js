

$(document).ready(function(){    
    

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


//create reservation
    // this is the id of the form
    $("#creategroupenss").submit(function(e) {
    
      e.preventDefault(); // avoid to execute the actual submit of the form.
      
      var form = $(this);
      var isValid = true;
      var inputSeance = $("#id_seanceens").val();
      var inputEleve = $("#eleve_ids").val();
      var inputGroupe = $("#groupe_id").val();
      var inputPayement = $("#payement_idens").val();
      
      
      if(isValid == true){
      
      let object = {
        id_seance: inputSeance,
        id_groupe: inputGroupe,
        id_loc: inputEleve,
        payement: inputPayement
      };
      console.log("object" +JSON.stringify(object));
      $.ajax({
             type: "POST",
             url: "http://localhost/Zied/server/Api/Factures/PayerSeanceLocataire.php",
             data: JSON.stringify(object),
             dataType: 'json',
             contentType: 'application/json',
             success: function(data)
             {
                 console.log(data);
                  // show response from the php script.
                  var myModal = $("#reservmodalens");
                  myModal.modal("show");
                  document.getElementById("creategroupenss").reset();
                  
                  setTimeout(function(){ location.replace("index.php"); }, 6000);
             },
             error: function (data) {
              var myModals = $("#reservmodalerrens");
              myModals.modal("show");
              }
           });
      
          }
      });




        //facturer etudiant

            //create reservation
    // this is the id of the form
    $("#facturergroup").submit(function(e) {
    
      e.preventDefault(); // avoid to execute the actual submit of the form.
      
      var form = $(this);
      var isValid = true;
      
      var inputEleve = $("#eleve_ids").val();
      var inputPayement = $("#payement_ids").val();
      
      
      if(isValid == true){
      
      let object = {
        id_groupe: inputEleve,
        payement: inputPayement
      };
      console.log("object" +JSON.stringify(object));
      $.ajax({
             type: "POST",
             url: "http://localhost/Zied/server/Api/Factures/FacturerEleve.php",
             data: JSON.stringify(object),
             dataType: 'json',
             contentType: 'application/json',
             success: function(data)
             {
                 console.log(data);
                  // show response from the php script.
                  var myModal = $("#reservmodalgrp");
                  myModal.modal("show");
                  var jsonData = data;
              console.log("Factures data loaded ....");
              console.log(jsonData);
    
              for(item of jsonData){
                 
                  var row = "<tr>";
                  row+='<td class="id_groupe">'+item.code_eleve+'</td>';
                  row+="<td>"+item.nom_eleve+" "+item.prenom_eleve+"</td>";
                  row+='<td>'+item.totalSeances+'</td>';
                  row+='<td>'+item.totalToPay+' DT'+'</td>';
                  row+='<td>'+item.totalPaid+' DT'+'</td>';
                  row+='<td>'+item.difference+' DT'+'</td>';
                  row+="</td>";
    
                $("#tbodyGroupes").append(row);
              }
                  
                  
             },
             error: function (data) {
              var myModals = $("#reservmodalerrgrp");
              myModals.modal("show");
              }
           });
      
          }
      });

///////////////////////////////////////////////////////////////////////////////////////////////////////

  //facturer etudiant

            //create reservation
    // this is the id of the form
    $("#facturerens").submit(function(e) {
    
      e.preventDefault(); // avoid to execute the actual submit of the form.
      
      var form = $(this);
      var isValid = true;
      
      var inputEns = $("#ens_ids").val();
      var inputGroupe = $("#eleve_idss").val();
      var inputPayement = $("#payement_idss").val();
      
      
      if(isValid == true){
      
      let object = {
        id_loc: inputEns,
        id_groupe: inputGroupe,
        payement: inputPayement
      };
      console.log("object" +JSON.stringify(object));
      $.ajax({
             type: "POST",
             url: "http://localhost/Zied/server/Api/Factures/FacturerLocataire.php",
             data: JSON.stringify(object),
             dataType: 'json',
             contentType: 'application/json',
             success: function(data)
             {
                 console.log(data);
                  // show response from the php script.
                  var myModal = $("#reservmodalgrp");
                  myModal.modal("show");
                  var jsonData = data;
              console.log("Factures data loaded ....");
              console.log(jsonData);
    
              for(item of jsonData){
                 
                  var row = "<tr>";
                  row+='<td class="id_groupese">'+item.id_locataire+'</td>';
                  row+="<td>"+item.nom_loc+" "+item.prenom_loc+"</td>";
                  row+='<td>'+item.totalSeances+'</td>';
                  row+='<td>'+item.totalToPay+' DT'+'</td>';
                  row+='<td>'+item.totalPaid+' DT'+'</td>';
                  row+='<td>'+item.difference+' DT'+'</td>';
                  row+="</td>";
                $("#tbodyGroupesEns").append(row);
              }
                  
                  
             },
             error: function (data) {
              var myModals = $("#reservmodalerrgrp");
              myModals.modal("show");
              }
           });
      
          }
      });





    });