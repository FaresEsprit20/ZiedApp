

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
    

              for(var item of jsonData){
                  var option = new Option(item.nom_groupe,item.id_groupe);
                $("#group_id").append(option);
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

                $("#tbodyGroupes").on('click','#btnDelete', function(){
                    var id =   $(this).closest('tr').find('.group_id').text();
                    var object = {
                        code_eleve: id
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
                //treatements  



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