<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');
include_once '../config/bdd.php';
$json = json_decode(file_get_contents('php://input'), true);

$result["success"] = false;
$result["error"] = "On passe pas le premier if.";

if (isset($json["email"]) and isset($json["idTournois"])) {
    $email = htmlspecialchars($json["email"]);
    $idTournois = htmlspecialchars($json["idTournois"]);

    $checkIfPlayerAlreadyParticipate = $bdd->prepare('SELECT * FROM participantsTournois WHERE email = :email and idTournois = :idTournois');
    $checkIfPlayerAlreadyParticipate->bindValue(":email", $email, PDO::PARAM_STR);
    $checkIfPlayerAlreadyParticipate->bindValue(":idTournois", $idTournois, PDO::PARAM_INT);
    $checkIfPlayerAlreadyParticipate->execute();

    if ($checkIfPlayerAlreadyParticipate->rowCount() > 0) {
        $result["success"] = true;
        $result["error"] = "";
    } else {
        $result["success"] = false;
        $result["error"] = "Ce joueur n'est pas inscrit à ce tournois.";
    }
} else {
    $result["success"] = false;
    $result["error"] = "Veuillez remplir tous les champs.";
}

echo json_encode($result);
