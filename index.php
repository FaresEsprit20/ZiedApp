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
               
                <a class="nav-link d-inline-block" aria-current="page" href="#landing">Accueil</a>
                <i class="navbar-fa fa fa-home fa-2x  d-inline-block"></i>
              </li>
              <li class="nav-item">
                
                <a class="nav-link d-inline-block" href="#features">Nos services</a>
                <i class="navbar-fa fa fa-pencil-square fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#reservations">Réservations</a>
                <i class="navbar-fa fa fa-product-hunt fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#groupes">Groupes</a>
                <i class="navbar-fa fa fa-users fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Archive
          </a>
          <i class="navbar-fa fa fa-archive fa-2x d-inline-block"></i>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="locatairesView.php">Locataires</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="RéservationsView.php">Réservations</a></li>
          </ul>
        </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#stats">Statistiques</a>
                <i class="navbar-fa fa fa-area-chart fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#contact">Suites Vides</a>
                <i class="navbar-fa fa fa-mail-forward fa-2x d-inline-block"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#contact">Contact</a>
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

  
<!-- Start Reservation -->

<section class="reservations" id="reservations">
  <div class="container-fluid">
    <div class="special-heading">Réservations</div>
      <p>Créer une réservation</p>
  <div class="row">
  <div class="col col-sm col-lg-2">
  </div>
    <div class="col-12 col-sm-12 col-lg-8">

      
      <div class="products-table mt-5 mb-5 pt-5 pb-5">
        <div class="table-reservations">

  

        <form class="row g-3">
        <div class="col-md-10">
    <label for="inputSalle" class="form-label">Choisir Salle</label>
    <select id="inputSalle" class="form-select">
      <option selected disabled>Salle...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputHeure" class="form-label">Début de réservation</label>
    <select id="inputHeure" class="form-select">
      <option selected disabled>Heure...</option>
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="inputJour" style="visibility:hidden" class="form-label">Début de réservation</label>
    <select id="inputJour" class="form-select">
      <option selected disabled>Jour...</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="inputMois" style="visibility:hidden" class="form-label">Début de réservation</label>
    <select id="inputMois" class="form-select">
      <option selected disabled>Mois...</option>
          <option value="01">Janvier</option>
          <option value="02">Février</option>
          <option value="03">Mars</option>
          <option value="04">Avril</option>
          <option value="05">Mai</option>
          <option value="06">Juin</option>
          <option value="07">Juillet</option>
          <option value="08">Aout</option>
          <option value="09">Séptembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="inputAndeb" style="visibility:hidden" class="form-label">Début de réservation</label>
    <select id="inputAndeb" class="form-select">
      <option selected disabled>An début...</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>  
    </select>
  </div>

  <!-- Partie Fin de Réservation -->
  <div class="col-md-3">
    <label for="inputHeureFin" class="form-label">Fin de réservation</label>
    <select id="inputHeureFin" class="form-select">
      <option selected disabled>Heure...</option>
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="inputJourFin" style="visibility:hidden" class="form-label">Fin de réservation</label>
    <select id="inputJourFin" class="form-select">
      <option selected disabled>Jour...</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="inputMoisFin" style="visibility:hidden" class="form-label">Fin de réservation</label>
    <select id="inputMoisFin" class="form-select">
      <option selected disabled>Mois...</option>
          <option value="01">Janvier</option>
          <option value="02">Février</option>
          <option value="03">Mars</option>
          <option value="04">Avril</option>
          <option value="05">Mai</option>
          <option value="06">Juin</option>
          <option value="07">Juillet</option>
          <option value="08">Aout</option>
          <option value="09">Séptembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
    </select>
  </div>
  <div class="col-md-3">
  <label for="inputAnFin" style="visibility:hidden" class="form-label">Fin de réservation</label>
    <select id="inputAnFin" class="form-select">
      <option selected disabled>An début...</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>  
    </select>
  </div>

<!-- Fin Partie Fin de Réservation -->

  <div class="col-md-6">
    <label for="reserv_cin" class="form-label">CIN</label>
    <input type="text" class="form-control" id="reserv_cin">
  </div>
  <div class="col-md-6">
  <label for="inputreservgroup" class="form-label">Groupe</label>
    <select id="inputAreservgroup" class="form-select">
      <option selected disabled>Sélectionner un groupe...</option>
    </select>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="reservCheck" required>
      <label class="form-check-label" for="reservCheck">
        Cochez moi
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-dark">Confirmer Réservation</button>
  </div>

</form>


      
        </div>

    </div>
  </div>
  <div class="col col-sm col-lg-2">
  </div>
  </div>
 
</section>

<!-- End Reservation-->


<!-- Start Groupes -->

<section class="groupes" id="groupes">
  <div class="container-fluid">
    <div class="special-heading">Groupes</div>
      <p>Créer un groupe</p>
  <div class="row">
  <div class="col col-sm col-lg-2">
  </div>
    <div class="col-12 col-sm-12 col-lg-8">

      
      <div class="products-table mt-5 mb-5">
        <div class="table-reservations">

  

        <form class="row g-3">
       

  <div class="col-md-8">
    <label for="nom_groupe" class="form-label">Nom Groupe</label>
    <input type="text" class="form-control" id="nom_groupe">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="reservCheck" required>
      <label class="form-check-label" for="reservCheck">
        Cochez moi
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-dark">Créer le Groupe</button>
  </div>

</form>


      
        </div>

    </div>
  </div>
  <div class="col col-sm col-lg-2">
  </div>
  </div>
 
</section>

<!-- End Reservation-->


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
    <span style="width:28px;" class="badge bg-primary rounded-pill text-center">15</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Réservations Archivées</div>
      Nombre de réservations archivées
    </div>
    <span style="width:28px;" class="badge bg-primary rounded-pill text-center">0</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Locataires</div>
      Nombre de locataires
    </div>
    <span style="width:28px;" class="badge bg-primary rounded-pill text-center">15</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto ">
      <div class="fw-bold text-secondary">Locataires</div>
      Nombre de locataires archivés
    </div>
    <span style="width:28px;" class="badge bg-primary rounded-pill text-center">5</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary">Groupes</div>
      Nombre de groupes
    </div>
    <span style="width:28px;" class="badge bg-primary rounded-pill text-center">8</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
    <div class="ms-2 me-auto">
      <div class="fw-bold text-secondary" >Groupes</div>
      Nombre de groupes archivés
    </div>
    <span style="width:28px;" class="badge bg-primary rounded-pill text-center">8</span>
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
    




    
  </body>

</html>
