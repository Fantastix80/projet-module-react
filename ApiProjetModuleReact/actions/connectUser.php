<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');
include_once '../config/bdd.php';
$json = json_decode(file_get_contents('php://input'), true);

if (isset($json["email"]) and isset($json["mdp"])) {
    $email = htmlspecialchars($json["email"]);
    $mdp = htmlspecialchars($json["mdp"]);
    $mdpHashed = hash("sha256", $mdp);

    $getUser = $bdd->prepare("SELECT * FROM users WHERE email = :email");
    $getUser->bindValue(":email", $email, PDO::PARAM_STR);
    $getUser->execute();

    if ($getUser->rowCount() > 0) {
        $user = $getUser->fetch();
        
        if ($mdpHashed == $user["mdp"]) {

            $result["success"] = true;
            $result["pseudo"] = $user["pseudo"];
            $result["email"] = $email;
        } else {
            $result["success"] = false;
            $result["error"] = "Le nom d'utilisateur ou le mot de passe est incorrect.";
            $result["debug1"] = $mdpHashed;
            $result["debug2"] = $user["mdp"];
        }
    } else {
        $result["success"] = false;
        $result["error"] = "Le nom d'utilisateur ou le mot de passe est incorrect.";
    }
    
} else {
    $result["success"] = false;
    $result["error"] = "Veuillez remplir tous les champs afin de pouvoir vous connecter.";
}

echo json_encode($result);