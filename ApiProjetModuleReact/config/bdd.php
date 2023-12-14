<?php

header('content-type: text/html; charset=utf-8');

$DB_HOST = "localhost";
$DB_NAME = "projet_module_react";
$DB_USER = "root";
$DB_PASSWORD = "";

$bdd = new PDO('mysql:host='.$DB_HOST.';dbname='.$DB_NAME.';charset=utf8;', $DB_USER, $DB_PASSWORD);