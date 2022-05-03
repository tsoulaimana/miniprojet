<?php

require_once '../../Modele/modeleVille.php';

$ville = new ModeleVille();
$codePostal = filter_input(INPUT_GET, "codePostal");
echo $ville->ObtenirVille($codePostal);