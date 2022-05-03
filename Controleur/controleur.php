<?php

require_once '../../mini_projet/Modele/modeleVille.php';

$ville = new ModeleVille();

if (filter_input(INPUT_SERVER, 'REQUEST_METHOD') == 'GET') {
    $action = filter_input(INPUT_GET, "action");
    switch ($action) {
        case 'remplirVille':       
            $codePostal = filter_input(INPUT_GET, 'codePostal');
            if (isset($codePostal)) {
                 echo $ville->ObtenirVilles($codePostal);
            }
            break;
    }
}