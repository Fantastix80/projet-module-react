
import "../assets/css/nav.css"

const Nav = () => {
    return (
        <>
            <nav className="navigation">
                <h1 className="titre-site">Tournois de jeux</h1>
                <ul>
                    <div className="nav-start">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="#">Liste des tournois</a></li>
                    </div>
                    <div className="nav-end">
                        <li><a href="#">Se connecter</a></li>
                        <li><a href="#">S'inscrire</a></li>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Nav;