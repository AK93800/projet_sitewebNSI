<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $prenom = $_POST['prenom'];
    $level = $_POST['level'];
    $SP1 = $_POST['SP1'];
    $SP2 = $_POST['SP2'];
    $SP3 = $_POST['SP3'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Créer un tableau associatif avec les données
    $formData = array(
        'name' => $name,
        'prenom' => $prenom,
        'level' => $level,
        'SP1' => $SP1,
        'SP2' => $SP2,
        'SP3' => $SP3,
        'email' => $email,
        'message' => $message
    );

    // Convertir le tableau en JSON
    $jsonData = json_encode($formData, JSON_PRETTY_PRINT);

    // Définir les en-têtes pour le téléchargement du fichier JSON
    header('Content-disposition: attachment; filename=form_data.json');
    header('Content-type: application/json');

    // Envoyer les données JSON au navigateur
    echo $jsonData;
    exit;
} else {
    echo "Méthode non autorisée.";
}
?>
