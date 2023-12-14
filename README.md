# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



-------- Démarrage du projet (Il est indispensable d'éxecuter ces commandes dans un terminal) --------

  React + ViteJs :
  
  Installation des packages : npm i
  
  Exécution de l'application web : npm run dev


  API :
  
  Installation des packages json-server : npm i -g json-server
  
  Exécution de json-server : json-server --watch db.json

  Si vous rencontrez cette erreur (Veuillez suivre ces étapes): https://media.discordapp.net/attachments/1168897800340254760/1184873237704871942/image.png?ex=658d8e31&is=657b1931&hm=21bbd2101608ef0b725b90e8b700420fddf5a1edf5c330e56aab2920d0f90c31&=&format=webp&quality=lossless&width=1440&height=316

  
  1) Ouvrir Windows PowerShell en administrateur
  2) Exécutez cette commande (pour retirer temporairement cette sécurité): Set-ExecutionPolicy RemoteSigned
  3) Redémarrez votre json-server, l'erreur devrait disparaître
  4) Une fois terminé, il est fortement conseillé de remettre en place cette sécurité : Set-ExecutionPolicy AllSigned

API PHP:
Pour ce qu'il s'agit de l'API en php permettant de faire le lien entre le projet react et la base de donnée, il vous faudra lancer le serveur xampp (apache et mysql).

Une fois cela fait, rendez vous sur phpmyadmin afin de créer la base de donnée. Le script de la base de donnée se situe dans le dossier de l'api php.

Finalement, il vous suffira d'ouvrir un cmd à l'emplacement de l'api php et d'exécuter la commande suivant: "php -S localhost:8000" afin de rendre l'api accesible par le projet react.



