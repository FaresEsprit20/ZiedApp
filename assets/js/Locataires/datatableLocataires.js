

$(document).ready(function(){


    function delReserv($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Locataires/DeleteLocataire.php",                     
            dataType: "json",            
            data: JSON.stringify($id),
            contentType: 'application/json',   
            success: function(data){     
              console.log("locataire deleted !");
              console.log(data);
            }
        });
    
    }
    
    
    function archvReserv($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Locataires/ArchiverLocataire.php",                     
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
            url: "http://localhost/Zied/server/Api/Locataires/getLocataires.php",                     
            dataType: "json",               
            success: function(data){      
              var jsonData = data;
              console.log("Locataires data loaded ....");
              console.log(jsonData);
    
              for(item of jsonData){
                 
                  var row = "<tr>";
                  row+='<td class="id_reserv">'+item.id_locataire+'</td>';
                  row+="<td>"+item.nom+"</td>";
                  row+="<td>"+item.prenom+"</td>";
                  row+="<td>"+item.cin+"</td>";
                  row+="<td>"+item.ville+"</td>";
                  row+="<td>"+item.rue+"</td>";
                  row+="<td>"+item.codepostal+"</td>";
                  row+="<td>"+item.email+"</td>";
                  row+="<td>"+item.tel+"</td>";
                  row+="<td>"+item.portable+"</td>";
                  row+='<td><div><button id="btnDelete" style="display:block;width:65px;margin-bottom:5px;" type="button" class="btn btn-info">Del</button><button style="display:block;width:65px;" id="btnArchv"type="button" class="btn btn-dark">Archv</button></div></td>';
                  row+="</td>";
    
                $("#tbodyEns").append(row);
              }
              $("#tbodyEns").on('click','#btnDelete', function(){
                var id =   $(this).closest('tr').find('.id_reserv').text();
                var object = {
                    id_locataire: id
                }
                var jsonObject = JSON.stringify(object);
               
                if (confirm('Do you want to Delete?')) {
                    delReserv(object);
                    location.reload();
                }else{
                    return false;
                }
               
              });
              $("#tbodyEns").on('click','#btnArchv', function(){
                var id =   $(this).closest('tr').find('.id_reserv').text();
                var object = {
                    id_locataire: id
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
    $("#createens").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var nom_ens = $("#nom_ens").val();
        var prenom_ens = $("#prenom_ens").val();
        var cin_ens = $("#cin_ens").val();
        var prenom_ens = $("#prenom_ens").val();
        var ville_ens = $("#ville_ens").val();
        var rue_ens = $("#rue_ens").val();
        var postal_ens = $("#postal_ens").val();
        var email_ens = $("#email_ens").val();
        var tel_ens = $("#tel_ens").val();
        var portable_ens = $("#portable_ens").val();
        

        if( nom_ens.length == 0 ){
        $("#enom").css("visibility","visible");
        isValid = false;
        $("#nom_ens").removeClass("is-valid");
        $("#nom_ens").addClass("is-invalid");
        console.log(nom_ens);
        console.log(isValid);
        $("#enom").removeClass("valid-feedback");
        $("#enom").addClass("invalid-feedback");
        $("#enom").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#enom").css("visibility","visible");
        $("#nom_ens").removeClass("is-invalid");
        $("#nom_ens").addClass("is-valid");
        console.log(isValid);
        $("#enom").removeClass("invalid-feedback");
        $("#enom").addClass("valid-feedback");
        $("#enom").html("Champ valide");
        }
        
        if( prenom_ens.length == 0){
        $("#eprenom").css("visibility","visible");
        isValid = false;
        $("#prenom_ens").removeClass("is-valid");
        $("#prenom_ens").addClass("is-invalid");
        console.log(prenom_ens);
        console.log(isValid);
        $("#eprenom").removeClass("valid-feedback");
        $("#eprenom").addClass("invalid-feedback");
        $("#eprenom").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#eprenom").css("visibility","visible");
        $("#prenom_ens").removeClass("is-invalid");
        $("#prenom_ens").addClass("is-valid");
        console.log(isValid);
        $("#eprenom").removeClass("invalid-feedback");
        $("#eprenom").addClass("valid-feedback");
        $("#eprenom").html("Champ valide");
        }
        
        if( cin_ens.length !=8){
        $("#ecin").css("visibility","visible");
        isValid = false;
        $("#cin_ens").removeClass("is-valid");
        $("#cin_ens").addClass("is-invalid");
        console.log(cin_ens);
        console.log(isValid);
        $("#ecin").removeClass("valid-feedback");
        $("#ecin").addClass("invalid-feedback");
        $("#ecin").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#ecin").css("visibility","visible");
        $("#cin_ens").removeClass("is-invalid");
        $("#cin_ens").addClass("is-valid");
        console.log(isValid);
        $("#ecin").removeClass("invalid-feedback");
        $("#ecin").addClass("valid-feedback");
        $("#ecin").html("Champ valide");
        }
        
        if( ville_ens.length == 0){
        $("#eville").css("visibility","visible");
        isValid = false;
        $("#ville_ens").removeClass("is-valid");
        $("#ville_ens").addClass("is-invalid");
        console.log("mois");
        console.log(ville_ens);
        console.log(isValid);
        $("#eville").removeClass("valid-feedback");
        $("#eville").addClass("invalid-feedback");
        $("#eville").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#eville").css("visibility","visible");
        $("#ville_ens").removeClass("is-invalid");
        $("#ville_ens").addClass("is-valid");
        console.log("mois");
        console.log(ville_ens);
        console.log(isValid);
        $("#eville").removeClass("invalid-feedback");
        $("#eville").addClass("valid-feedback");
        $("#eville").html("Champ valide");
        }
        
        if( rue_ens.length == 0){
        $("#erue").css("visibility","visible");
        isValid = false;
        $("#rue_ens").removeClass("is-valid");
        $("#rue_ens").addClass("is-invalid");
        console.log(rue_ens);
        console.log(isValid);
        $("#erue").removeClass("valid-feedback");
        $("#erue").addClass("invalid-feedback");
        $("#erue").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#erue").css("visibility","visible");
        $("#rue_ens").removeClass("is-invalid");
        $("#rue_ens").addClass("is-valid");
        console.log(isValid);
        console.log("andeb");
        console.log(rue_ens);
        $("#erue").removeClass("invalid-feedback");
        $("#erue").addClass("valid-feedback");
        $("#erue").html("Champ valide");
        }
       // var postal_ens = $("#postal_ens").val();
       // var email_ens = $("#email_ens").val();
       // var tel_ens = $("#tel_ens").val(); 
       if( postal_ens < 1000 || postal_ens > 9999){
        $("#epostal").css("visibility","visible");
        isValid = false;
        $("#postal_ens").removeClass("is-valid");
        $("#postal_ens").addClass("is-invalid");
        console.log(postal_ens);
        console.log(isValid);
        $("#epostal").removeClass("valid-feedback");
        $("#epostal").addClass("invalid-feedback");
        $("#epostal").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#epostal").css("visibility","visible");
        $("#postal_ens").removeClass("is-invalid");
        $("#postal_ens").addClass("is-valid");
        console.log(isValid);
        $("#epostal").removeClass("invalid-feedback");
        $("#epostal").addClass("valid-feedback");
        $("#epostal").html("Champ valide");
        }

        if( email_ens.length == 0){
            $("#eemail").css("visibility","visible");
            isValid = false;
            $("#email_ens").removeClass("is-valid");
            $("#email_ens").addClass("is-invalid");
            console.log(postal_ens);
            console.log(isValid);
            $("#eemail").removeClass("valid-feedback");
            $("#eemail").addClass("invalid-feedback");
            $("#eemail").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#eemail").css("visibility","visible");
            $("#email_ens").removeClass("is-invalid");
            $("#email_ens").addClass("is-valid");
            console.log(isValid);
            $("#eemail").removeClass("invalid-feedback");
            $("#eemail").addClass("valid-feedback");
            $("#eemail").html("Champ valide");
            }

            if( tel_ens.length != 8){
                $("#etel").css("visibility","visible");
                isValid = false;
                $("#tel_ens").removeClass("is-valid");
                $("#tel_ens").addClass("is-invalid");
                console.log(postal_ens);
                console.log(isValid);
                $("#etel").removeClass("valid-feedback");
                $("#etel").addClass("invalid-feedback");
                $("#etel").html("Champ invalide");
                return false;
                }else{
                isValid = true;
                $("#etel").css("visibility","visible");
                $("#tel_ens").removeClass("is-invalid");
                $("#tel_ens").addClass("is-valid");
                console.log(isValid);
                $("#etel").removeClass("invalid-feedback");
                $("#etel").addClass("valid-feedback");
                $("#etel").html("Champ valide");
                }

        if( portable_ens < 10000000 || portable_ens > 99999999){
            $("#eportable").css("visibility","visible");
            isValid = false;
            $("#portable_ens").removeClass("is-valid");
            $("#portable_ens").addClass("is-invalid");
            console.log(rue_ens);
            console.log(isValid);
            $("#eportable").removeClass("valid-feedback");
            $("#eportable").addClass("invalid-feedback");
            $("#eportable").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#eportable").css("visibility","visible");
            $("#portable_ens").removeClass("is-invalid");
            $("#portable_ens").addClass("is-valid");
            console.log(isValid);
            $("#eportable").removeClass("invalid-feedback");
            $("#eportable").addClass("valid-feedback");
            $("#eportable").html("Champ valide");
            }
        
        
        
        if(isValid == true){
          
            console.log("valeur portable  "+portable_ens +"  "+$("#portable_ens").val());
        let objects = {
            nom: $("#nom_ens").val(),
            prenom:  $("#prenom_ens").val(),
            cin: $("#cin_ens").val(),
            prenom: $("#prenom_ens").val(),
            ville: $("#ville_ens").val(),
            rue: $("#rue_ens").val(),
            codepostal: $("#postal_ens").val(),
            portable: $("#portable_ens").val(),
            email:  $("#email_ens").val(),
            tel: $("#tel_ens").val(),
            
        };
        console.log("object" +JSON.stringify(objects));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Locataires/AddLocataire.php",
               data: JSON.stringify(objects),
               dataType: 'json',
               contentType: 'application/json',
               success: function(data)
               {
                   console.log(data);
                    // show response from the php script.
                    var myModal = $("#reservmodal");
                    myModal.modal("show");
                    document.getElementById("createens").reset();
                    
                    setTimeout(function(){ location.replace("index.php"); }, 6000);
               }
             });
        
            }
        });





    });