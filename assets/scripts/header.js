document.getElementById("head").innerHTML = 
`
<link rel="stylesheet" type="text/css" media="screen" href="assets/style.css">
<link rel="stylesheet" href="assets/materialize/css/materialize.min.css">
<link href="assets/fontawesome/css/all.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="assets/scripts/header.js"></script>
<script src="assets/materialize/js/materialize.js"></script>
`

document.getElementById("header").innerHTML = 
`
<nav>
  <div class="nav-wrapper deep-orange accent-3">
    <ul>
      <li><a class="tooltipped waves-effect" data-position="bottom" data-tooltip="Menu de Destaques" href="index.html"><i class="material-icons">home</i></a></li>
      <li><a class="tooltipped waves-effect" data-position="bottom" data-tooltip="Filmes" href="filmes.html"><i class="material-icons">local_movies</i></a></li>
      <li><a class="tooltipped waves-effect" data-position="bottom" data-tooltip="Séries" href="series.html" disabled="true"><i class="material-icons">live_tv</i></a></li>
      <li><a class="tooltipped waves-effect" data-position="bottom" data-tooltip="Sobre Nós" href="sobre.html"><i class="material-icons">info</i></a></li>
    </ul>
  </div>
</nav>
<div class="fixed-action-btn">
  <a class="btn-floating tooltipped grey darken-3 waves-effect" data-position="left" data-tooltip="Ir ao topo" href="#header"><i class="material-icons">arrow_drop_up</i></a>
</div>
`