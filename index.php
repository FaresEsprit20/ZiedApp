<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Internship Project</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
      
    
    </head>
    
    <body>
        <a id="button-scroll-top"></a>
        <header>
    <nav class="navbar fixed-top navbar-light bg-light" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.php">
            <img src="assets/images/logo/logo.jpeg" alt="" width="30" height="24" class="d-inline-block align-text-top">
            Reserv App
          </a>
          <!--bouton fermée de toggle  btn-close -->
          <button class="navbar-toggler shadow-none" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
               
                <a class="nav-link d-inline-block" aria-current="page" href="index.php">Accueil</a>
                <i class="navbar-fa fa fa-home fa-2x  d-inline-block"></i>
              </li>
              <li class="nav-item">
                
                <a class="nav-link d-inline-block" href="#features">Nos services</a>
                <i class="navbar-fa fa fa-pencil-square fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="RéservationsView.php">Réservations</a>
                <i class="navbar-fa fa fa-product-hunt fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="GroupesView.php">Groupes</a>
                <i class="navbar-fa fa fa-users fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="ElevesView.php">Eleves</a>
                <i class="navbar-fa fa fa-users fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Archive
          </a>
          <i class="navbar-fa fa fa-archive fa-2x d-inline-block"></i>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="LocationsView.php">Locations</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="ProfesseurView.php">Enseignants</a></li>
          </ul>
        </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#stats">Statistiques</a>
                <i class="navbar-fa fa fa-area-chart fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="SuiteVideView.php">Suites Vides</a>
                <i class="navbar-fa fa fa-mail-forward fa-2x d-inline-block"></i>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
</header>
       

<main>

    <!-- Start Landing Section -->

<section class="landing" id="landing">
 
</section>

<!-- End Landing Section -->


<!-- Start Features Section -->


  <!-- Start Features Section -->

  <section class="features" id="features">
    <div class="container-fluid">
      <h2 class="special-heading">Fonctionnalités</h2>
        <p>Ce que nous offrons</p>
        <div class="row">
<div class="col-12  col-lg-4 col-sm-12">
  <div class="feat">
    <i class="fa fa-mobile-phone fa-3x"></i>
<h3>Mobile First App</h3>
<p>Application responsive et adaptée aux terminaux mobiles. Cette application offre une meilleure expérience utilisateur et elle est trés facile a utiliser.</p>
</div>
</div>

<div class="col-12  col-lg-4 col-sm-12">
  <div class="feat">
    <i class="fa fa-product-hunt fa-3x"></i>
<h3>Effectuer et Suivre les réservations</h3>
<p>Nous vous proposons une plateforme de réservation et de suivie chaque jour et chaque heure avec un simple click!</p>
</div>
</div>

<div class="col-12  col-lg-4 col-sm-12">
  <div class="feat">
    <i class="fa fa-pie-chart fa-3x"></i>
<h3>Statistiques Réservations Dashboard</h3>
<p>Vous pouvez suivre les réservations grâce à nos superbes chartes graphiques et tableaux de bord que nous vous proposons pour un meilleur service.</p>
</div>
</div>

  </div>
        
    </div>
  </section>

  <!-- End Features Section -->


<!-- Start Products -->

<section class="reservationsstats" id="reservationsstats">
  <div class="container-fluid">
    <div class="special-heading">Réservations</div>
      <p>Statistiques des réservations</p>
  <div class="row">
  <div class="col col-sm col-lg-2">
  </div>
   
  <div class="col-12 col-sm-12 col-lg-8">  
      <div class="reservations-table mt-5 mb-5">
   
   
      <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Réservations</div>
      Nombre de réservations
    </div>
    <span style="width:34px;" id="reserv" class="badge bg-primary rounded-pill text-center"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Réservations Archivées</div>
      Nombre de réservations archivées
    </div>
    <span style="width:34px;" id="reservarchv" class="badge bg-primary rounded-pill text-center"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Locataires</div>
      Nombre de locataires
    </div>
    <span style="width:34px;" id="loc" class="badge bg-primary rounded-pill text-center"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto ">
      <div class="fw-bold text-secondary">Locataires</div>
      Nombre de locataires archivés
    </div>
    <span style="width:34px;" id="locarchv" class="badge bg-primary rounded-pill text-center"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Groupes</div>
      Nombre de groupes
    </div>
    <span style="width:34px;" id="grp" class="badge bg-primary rounded-pill text-center"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary" >Groupes</div>
      Nombre de groupes archivés
    </div>
    <span style="width:34px;" id="grparchv" class="badge bg-primary rounded-pill text-center"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary" >Paiement</div>
      Pourcentage de personnes payés
    </div>
    <span style="width:34px;" class="badge bg-primary rounded-pill text-center">80%</span>
  </li>
</ul>

    </div>
  </div>
  

  <div class="col col-sm col-lg-2">
  </div>

  <!--End Row -->
</div>
 
</section>

<!-- End Products -->



<!-- Start Stats -->
<!--
<section class="stats" id="stats">
    <div class="container-fluid">
      <h2 class="special-heading">Statistiques</h2>
        <p>Suivre les statistiques journalières</p>
        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
       <canvas id="myChartOne"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>

        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
            <select id="selectlignes">

            </select>
       <canvas id="myChartTwo"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>




        
        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
            <select id="selectligness">

            </select>
       <canvas id="myChartThree" height="200px"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>


        <div class="row">
        <div class="col col-lg-2 col-sm-1">
        </div>
        <div class="col-12 col-lg-8 col-sm-10">
          <div class="stat">
            <select id="selectlignesbar">

            </select>
       <canvas id="myChartFour" height="250px"></canvas>
       </div>
      </div>
      <div class="col col-lg-2 col-sm-1">
        </div>
        </div>
        
        
    </div>
  </section>
-->
<!-- End Stats -->




</div>
</main>
<footer>
    <div class="bg-light">
        <div class="container">
          <div class="row pt-4 pb-3">
            <div class="col">
              <ul class="list-inline text-center">
                <li class="list-inline-item"><a href="#">À propos</a></li>
                <li class="list-inline-item">&middot;</li>
                <li class="list-inline-item"><a href="#">Vie privée</a></li>
                <li class="list-inline-item">&middot;</li>
                <li class="list-inline-item"><a href="#">Conditions d'utilisations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</footer>


    <!-- Popper.js first, then Bootstrap JS -->
    <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="assets/js/main-script.js" ></script> 
    <script src="assets/js/Index/dashboard.js" ></script> 
 
    




    
  </body>

</html>
