document.getElementById("head").innerHTML = 
`
<link rel="stylesheet" type="text/css" media="screen" href="../assets/style.css">
<link rel="stylesheet" href="../assets/materialize/css/materialize.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="jquery-3.4.1.min.js"></script>
<script src="../assets/scripts/main.js"></script>
`

document.getElementById("header").innerHTML = 
`
<nav>
  <div class="nav-wrapper deep-orange accent-3">
    <ul>
      <li><a href="index.html"><i class="material-icons">home</i></a></li>
      <li><a href="filmes.html"><i class="material-icons">local_movies</i></a></li>
      <li><a href="series.html" disabled="true"><i class="material-icons">live_tv</i></a></li>
      <li><a href="sobre.html"><i class="material-icons">info</i></a></li>
    </ul>
  </div>
</nav>
`