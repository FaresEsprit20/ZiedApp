
$(document).ready(function(){
    

    $.ajax({    
        type: "GET",
        url: "http://localhost/Zied/server/Api/Dashboard/getIndexDashboard.php",                     
        dataType: "json",               
        success: function(data){      
          var jsonData = data;
          console.log("data loaded ....");
          console.log(jsonData);
          var reserv;
          var reservarchv;
          var loc;
          var locarchv;
          var grp;
          var grparchv;

          reserv = jsonData.reserv;
          reservarchv = jsonData.reserv2;
          loc = jsonData.loc;
          locarchv = jsonData.loc2;
          grp = jsonData.grp;
          grparchv = jsonData.grp;


         $("#reserv").append(reserv);
         $("#reservarchv").append(reservarchv);
         $("#loc").append(loc);
         $("#locarchv").append(locarchv)
         $("#grp").append(grp);
         $("#grparchv").append(grparchv);        

        },
        error: function (data) { alert("Server Error"); }
    });



  });