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
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.1/css/dataTables.bootstrap5.min.css">
    
    </head>
    
    <body>
        <a id="button-scroll-top"></a>
        <header>
        <nav class="navbar fixed-top navbar-light bg-light" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
                <a class="nav-link d-inline-block" href="SuiteVideView.php">Suites Vides</a>
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

<a id="button-scroll-top"></a>

<!-- Start Products -->

<section class="locatairesView" id="locatairesView">
  <div class="container-fluid">
    <div class="special-heading">Locataires</div>
      <p>Voir les locataires archivés et non archivés</p>
  <div class="row">
  <div class="col col-sm col-lg-2">
  </div>
    <div class="col-12 col-sm-12 col-lg-8">

      
      <div class="locataires-table mt-5 mb-5">
        <div class="table-responsive">

          <table class="table table display" id="locatairesDatatable">
            <caption>Liste des locataires</caption>
            <thead class="table-dark">
              <th scope="col">#</th>
              <th scope="col">CIN</th>
              <th scope="col">Nom & Prenom</th>
              <th scope="col">Ville</th>
              <th scope="col">Email</th>
              <th scope="col">Portable</th>
              <th scope="col">Etat</th>
            </thead>
            <tbody id="tbody">
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            <tr>
            <td scope="col">#</td>
              <td scope="col">CIN</td>
              <td scope="col">Nom & Prenom</td>
              <td scope="col">Ville</td>
              <td scope="col">Email</td>
              <td scope="col">Portable</td>
              <td scope="col">Etat</td>
            </tr>
            </tbody>
          </table>
      
        </div>

    </div>
  </div>
  <div class="col col-sm col-lg-2">
  </div>
  </div>
 
</section>

<!-- End Products -->


  
<!-- Start Products -->

<section class="locationsView" id="locationsView">
  <div class="container-fluid">
    <div class="special-heading">Locations</div>
      <p>Voir les locations par locataire</p>
  <div class="row">
  <div class="col col-sm col-lg-2">
  </div>
    <div class="col-12 col-sm-12 col-lg-8">

      
      <div class="locataires-table mt-5 mb-5">
        <div class="table-responsive">

          <table class="table display" id="locationsDatatable">
            <caption>Liste des locataires</caption>
            <thead class="table-dark">
              <th scope="col">#id_loc</th>
              <th scope="col">#Nom_salle</th>
              <th scope="col">#Nom groupe</th>
              <th scope="col">CIN</th>
              <th scope="col">Nom & Prenom</th>
              <th scope="col">Ville</th>
              <th scope="col">Email</th>
              <th scope="col">Portable</th>
              <th scope="col">Date début Location</th>
              <th scope="col">Date fin Location</th>
              <th scope="col">Heure début</th>
              <th scope="col">Heure fin</th>

            </thead>
            <tbody id="tbody">
              
            </tbody>
          </table>
      
        </div>

    </div>
  </div>
  <div class="col col-sm col-lg-2">
  </div>
  </div>
 
</section>

<!-- End Products -->







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
    <script src="assets/js/Locataires/datatableLocataires.js" ></script> 
    <script src="assets/js/Locataires/datatablelocations.js" ></script> 
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.1/js/dataTables.bootstrap5.min.js"></script>



    
  </body>

</html>
