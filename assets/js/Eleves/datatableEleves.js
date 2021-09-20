

$(document).ready(function(){


    function delReserv($id){
    
        //get dashboard data
        $.ajax({    
            type: "POST",
            url: "http://localhost/Zied/server/Api/Eleves/DeleteEleve.php",              
            dataType: "json",            
            data: JSON.stringify($id),
            contentType: 'application/json',   
            success: function(data){     
              console.log("eleve deleted !");
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
    

              for(var item of jsonData){
                  var option = new Option(item.nom_groupe,item.id_groupe);
                $("#group_id").append(option);
              }
              for(var item of jsonData){
                var option = new Option(item.nom_groupe,item.id_groupe);
              $("#group_ide").append(option);
            }
              
   
             // $('#reservationsDatatable').DataTable();
   
              //get dashboard data
        $.ajax({    
            type: "GET",
            url: "http://localhost/Zied/server/Api/Eleves/GetAllEleves.php",                     
            dataType: "json",               
            success: function(data){      
                var jsonData = data;
                console.log("Eleves data loaded ....");
                console.log(jsonData);
      
                for(item of jsonData){
                   
                    var row = "<tr>";
                    row+='<td class="group_id">'+item.code_eleve+'</td>';
                    row+="<td>"+item.prenom_eleve+"</td>";
                    row+="<td>"+item.nom_eleve+"</td>";
                    row+="<td>"+item.classe+"</td>";
                    row+="<td>"+item.num_tel+"</td>";
                    row+='<td><div><button id="btnDelete" style="display:block;width:65px;margin-bottom:5px;" type="button" class="btn btn-info">Del</button>';
                    row+="</td>";
      
                  $("#tbodyGroupes").append(row);
                }
                 $("#eleDatatable").DataTable();
                $("#tbodyGroupes").on('click','#btnDelete', function(){
                    var id =   $(this).closest('tr').find('.group_id').text();
                    var object = {
                        code_eleve: id
                    }
                   
                    if (confirm('Do you want to Delete?')) {
                        delReserv(object);
                        location.reload();
                    }else{
                        return false;
                    }
                   
                  });

                  for(var item of jsonData){
                    var option = new Option(item.nom_eleve + " "+item.prenom_eleve,item.code_eleve);
                  $("#eleve_ide").append(option);
                }


            }
        });
                   //edit group
    // this is the id of the form
    $("#editgroup").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var selectedGroups = [];
        var inputEleve = $("#eleve_ide").val();
        var inputLastName = $("#ln_elevee").val();
        var inputName = $("#n_elevee").val();
        var inputClasse = $("#c_elevee").val();
        var inputTel = $("#t_elevee").val();

        $("#group_ide :selected").each(function(){
            selectedGroups.push(this.value);
         });
        console.log(selectedGroups);
        if( selectedGroups.length == 0){
            $("#ige").css("visibility","visible");
            isValid = false;
            $("#group_ide").removeClass("is-valid");
            $("#group_ide").addClass("is-invalid");
            console.log(inputName);
            console.log(isValid);
            $("#ige").removeClass("valid-feedback");
            $("#ige").addClass("invalid-feedback");
            $("#ige").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#ige").css("visibility","visible");
            $("#group_ide").removeClass("is-invalid");
            $("#group_ide").addClass("is-valid");
            console.log(isValid);
            $("#ige").removeClass("invalid-feedback");
            $("#ige").addClass("valid-feedback");
            $("#ige").html("Champ valide");
            }
                
            if( inputEleve =="nil"){
                $("#iee").css("visibility","visible");
                isValid = false;
                $("#eleve_ide").removeClass("is-valid");
                $("#eleve_ide").addClass("is-invalid");
                console.log(inputName);
                console.log(isValid);
                $("#iee").removeClass("valid-feedback");
                $("#iee").addClass("invalid-feedback");
                $("#iee").html("Champ invalide");
                return false;
                }else{
                isValid = true;
                $("#iee").css("visibility","visible");
                $("#eleve_ide").removeClass("is-invalid");
                $("#eleve_ide").addClass("is-valid");
                console.log(isValid);
                $("#iee").removeClass("invalid-feedback");
                $("#iee").addClass("valid-feedback");
                $("#iee").html("Champ valide");
                }
        if( inputLastName =="nil" || inputLastName.length < 3){
            $("#ilne").css("visibility","visible");
            isValid = false;
            $("#ln_elevee").removeClass("is-valid");
            $("#ln_elevee").addClass("is-invalid");
            console.log(inputName);
            console.log(isValid);
            $("#ilne").removeClass("valid-feedback");
            $("#ilne").addClass("invalid-feedback");
            $("#ilne").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#ilne").css("visibility","visible");
            $("#ln_elevee").removeClass("is-invalid");
            $("#ln_elevee").addClass("is-valid");
            console.log(isValid);
            $("#ilne").removeClass("invalid-feedback");
            $("#ilne").addClass("valid-feedback");
            $("#ilne").html("Champ valide");
            }
        
        if( inputName =="nil" || inputName.length < 2){
        $("#in").css("visibility","visible");
        isValid = false;
        $("#n_elevee").removeClass("is-valid");
        $("#n_elevee").addClass("is-invalid");
        console.log(inputName);
        console.log(isValid);
        $("#ine").removeClass("valid-feedback");
        $("#ine").addClass("invalid-feedback");
        $("#ine").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#ine").css("visibility","visible");
        $("#n_elevee").removeClass("is-invalid");
        $("#n_elevee").addClass("is-valid");
        console.log(isValid);
        $("#ilne").removeClass("invalid-feedback");
        $("#ilne").addClass("valid-feedback");
        $("#ilne").html("Champ valide");
        }
        
        if( inputClasse =="nil" ){
            $("#ice").css("visibility","visible");
            isValid = false;
            $("#c_elevee").removeClass("is-valid");
            $("#c_elevee").addClass("is-invalid");
            console.log(inputName);
            console.log(isValid);
            $("#ice").removeClass("valid-feedback");
            $("#ice").addClass("invalid-feedback");
            $("#ice").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#ice").css("visibility","visible");
            $("#c_elevee").removeClass("is-invalid");
            $("#c_elevee").addClass("is-valid");
            console.log(isValid);
            $("#ice").removeClass("invalid-feedback");
            $("#ice").addClass("valid-feedback");
            $("#ice").html("Champ valide");
            }
       
            if( inputTel =="nil" || inputTel< 10000000 || inputTel > 99999999){
                $("#ite").css("visibility","visible");
                isValid = false;
                $("#t_elevee").removeClass("is-valid");
                $("#t_elevee").addClass("is-invalid");
                console.log(inputName);
                console.log(isValid);
                $("#ite").removeClass("valid-feedback");
                $("#ite").addClass("invalid-feedback");
                $("#ite").html("Champ invalide");
                return false;
                }else{
                isValid = true;
                $("#ite").css("visibility","visible");
                $("#t_elevee").removeClass("is-invalid");
                $("#t_elevee").addClass("is-valid");
                console.log(isValid);
                $("#ite").removeClass("invalid-feedback");
                $("#ite").addClass("valid-feedback");
                $("#ite").html("Champ valide");
                }
       
        
        if(isValid == true){
            let object = {
                code_eleve: inputEleve,
                selectedGroups: selectedGroups,
                prenom_eleve:inputLastName,
                nom_eleve:  inputName,
                classe: inputClasse,
                num_tel: inputTel
           };
           console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Eleves/UpdateEleve.php",
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
                    
                    setTimeout(function(){ location.reload(); }, 6000);
               }
             });
        
            }
        });
    
    
            },
            error: function (data) { alert("Server Error"); }
        });
    
    

    //create reservation
    //this is the id of the form
    $("#creategroup").submit(function(e) {
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
        
        var form = $(this);
        var isValid = false;
        var selectedGroups = [];
        var inputLastName = $("#ln_eleve").val();
        var inputName = $("#n_eleve").val();
        var inputClasse = $("#c_eleve").val();
        var inputTel = $("#t_eleve").val();

        $("#group_id :selected").each(function(){
            selectedGroups.push(this.value);
         });
        console.log(selectedGroups);
        if( selectedGroups.length == 0){
            $("#ig").css("visibility","visible");
            isValid = false;
            $("#group_id").removeClass("is-valid");
            $("#group_id").addClass("is-invalid");
            console.log(inputName);
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
                
        if( inputLastName =="nil" || inputLastName.length < 3){
            $("#iln").css("visibility","visible");
            isValid = false;
            $("#ln_eleve").removeClass("is-valid");
            $("#ln_eleve").addClass("is-invalid");
            console.log(inputName);
            console.log(isValid);
            $("#iln").removeClass("valid-feedback");
            $("#iln").addClass("invalid-feedback");
            $("#iln").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#iln").css("visibility","visible");
            $("#ln_eleve").removeClass("is-invalid");
            $("#ln_eleve").addClass("is-valid");
            console.log(isValid);
            $("#iln").removeClass("invalid-feedback");
            $("#iln").addClass("valid-feedback");
            $("#iln").html("Champ valide");
            }
        
        if( inputName =="nil" || inputName.length < 2){
        $("#in").css("visibility","visible");
        isValid = false;
        $("#n_eleve").removeClass("is-valid");
        $("#n_eleve").addClass("is-invalid");
        console.log(inputName);
        console.log(isValid);
        $("#in").removeClass("valid-feedback");
        $("#in").addClass("invalid-feedback");
        $("#in").html("Champ invalide");
        return false;
        }else{
        isValid = true;
        $("#in").css("visibility","visible");
        $("#n_eleve").removeClass("is-invalid");
        $("#n_eleve").addClass("is-valid");
        console.log(isValid);
        $("#iln").removeClass("invalid-feedback");
        $("#iln").addClass("valid-feedback");
        $("#iln").html("Champ valide");
        }
        
        if( inputClasse =="nil" ){
            $("#ic").css("visibility","visible");
            isValid = false;
            $("#c_eleve").removeClass("is-valid");
            $("#c_eleve").addClass("is-invalid");
            console.log(inputName);
            console.log(isValid);
            $("#ic").removeClass("valid-feedback");
            $("#ic").addClass("invalid-feedback");
            $("#ic").html("Champ invalide");
            return false;
            }else{
            isValid = true;
            $("#ic").css("visibility","visible");
            $("#c_eleve").removeClass("is-invalid");
            $("#c_eleve").addClass("is-valid");
            console.log(isValid);
            $("#ic").removeClass("invalid-feedback");
            $("#ic").addClass("valid-feedback");
            $("#ic").html("Champ valide");
            }
       
            if( inputTel =="nil" || inputTel< 10000000 || inputTel > 99999999){
                $("#it").css("visibility","visible");
                isValid = false;
                $("#t_eleve").removeClass("is-valid");
                $("#t_eleve").addClass("is-invalid");
                console.log(inputName);
                console.log(isValid);
                $("#it").removeClass("valid-feedback");
                $("#it").addClass("invalid-feedback");
                $("#it").html("Champ invalide");
                return false;
                }else{
                isValid = true;
                $("#it").css("visibility","visible");
                $("#t_eleve").removeClass("is-invalid");
                $("#t_eleve").addClass("is-valid");
                console.log(isValid);
                $("#it").removeClass("invalid-feedback");
                $("#it").addClass("valid-feedback");
                $("#it").html("Champ valide");
                }
        
        if(isValid == true){
        
        let object = {
             selectedGroups: selectedGroups,
             prenom_eleve:inputLastName,
             nom_eleve:  inputName,
             classe: inputClasse,
             num_tel: inputTel
        };
        console.log("object" +JSON.stringify(object));
        $.ajax({
               type: "POST",
               url: "http://localhost/Zied/server/Api/Eleves/AddEleve.php",
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