

var btn = $('#button-scroll-top');


$(document).ready(function(){
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
           navbarDark();
         
        }
  
        else{
            navbarLight();
        }
    });

$("#navbar-toggler").on('click',function(){

  if($('#navbar-toggler').hasClass('navbar-toggler')){
    $("#navbar-toggler").removeClass('navbar-toggler');
    $(".navbar-toggler-icon").css("visibility","hidden");
    console.log($('#navbar-toggler').hasClass('navbar-toggler'));
    $("#navbar-toggler").addClass('btn-close');
    $("#navbar-toggler").css("color", "white")
  }else if($('#navbar-toggler').hasClass('btn-close')){
    $("#navbar-toggler").removeClass('btn-close');
    $(".navbar-toggler-icon").css("visibility","visible");
    console.log($('#navbar-toggler').hasClass('btn-close'));
    $("#navbar-toggler").addClass('navbar-toggler');
  }

});


/*$(".nav-link").on('click',function(){

  if($('#navbar-toggler').hasClass('navbar-toggler')){
    $("#navbar-toggler").removeClass('navbar-toggler');
    $(".navbar-toggler-icon").css("visibility","hidden");
    console.log($('#navbar-toggler').hasClass('navbar-toggler'));
    $("#navbar-toggler").addClass('btn-close');
    $("#navbar-toggler").css("color", "white")
  }else if($('#navbar-toggler').hasClass('btn-close')){
    $("#navbar-toggler").removeClass('btn-close');
    $(".navbar-toggler-icon").css("visibility","visible");
    console.log($('#navbar-toggler').hasClass('btn-close'));
    $("#navbar-toggler").addClass('navbar-toggler');
  }

});*/


function navbarLight(){
  $("#navbar").removeClass('bg-dark');
  $("#navbar").removeClass('navbar-dark');
  $("#navbar").addClass('bg-light');
  $("#navbar").addClass('navbar-light');
}

function navbarDark(){
  $("#navbar").removeClass('navbar-light');
  $("#navbar").removeClass('navbar-light');
  $("#navbar").addClass('bg-dark');
  $("#navbar").addClass('navbar-dark');
}

    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
      
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
      



      


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
          grparchv = jsonData.grp2;


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