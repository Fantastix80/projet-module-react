<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');
include_once '../config/bdd.php';
$json = json_decode(file_get_contents('php://input'), true);

$result["success"] = false;
$result["error"] = "On passe pas le premier if.";

if (isset($json["pseudo"]) and isset($json["email"]) and isset($json["mdp"])) {
    $pseudo = htmlspecialchars($json["pseudo"]);
    $email = htmlspecialchars($json["email"]);
    $mdp = htmlspecialchars($json["mdp"]);

    $checkIfAccountExists = $bdd->prepare('SELECT email FROM users WHERE email = :email');
    $checkIfAccountExists->bindValue(":email", $email, PDO::PARAM_STR);
    $checkIfAccountExists->execute();

    if ($checkIfAccountExists->rowCount() > 0) {
        $result["success"] = false;
        $result["error"] = "Cet email est déjà associé à un compte existant.";
    } else {
        try {
            $mdpHashed = hash("sha256", $mdp);

            $createAccount = $bdd->prepare("INSERT INTO users (email, pseudo, mdp) VALUES (:email, :pseudo, :mdp);");
            $createAccount->bindValue(":pseudo", $pseudo, PDO::PARAM_STR);
            $createAccount->bindValue(":email", $email, PDO::PARAM_STR);
            $createAccount->bindValue(":mdp", $mdpHashed, PDO::PARAM_STR);
            $createAccount->execute();

            $result["success"] = true;
            $result["error"] = "";
            $result["pseudo"] = $pseudo;
            $result["email"] = $email;
        } catch (Exception $e) {
            $result["success"] = false;
            $result["error"] = "Erreur lors de la création du compte.";
        }
    }
} else {
    $result["success"] = false;
    $result["error"] = "Veuillez remplir tous les champs afin de pouvoir vous inscrire.";
}

echo json_encode($result);
