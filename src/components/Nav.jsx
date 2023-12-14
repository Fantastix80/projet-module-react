
import { Link } from "react-router-dom";
import "../assets/css/nav.css"

const Nav = () => {
    return (
        <>
            <nav className="navigation">
                <h1 className="titre-site">Tournois de jeux</h1>
                <ul>
                    <div className="nav-start">
                        <li><Link to={ "/" }>Accueil</Link></li>
                        <li><Link to={ "/listeTournois" }>Liste des tournois</Link></li>
                    </div>
                    <div className="nav-end">
                        <li><Link to={ "/connexion" }>Se connecter</Link></li>
                        <li><Link to={ "/inscription" }>S'inscrire</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Nav;