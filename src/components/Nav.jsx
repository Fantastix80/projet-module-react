
import { Link } from "react-router-dom";
import "../assets/css/nav.css"
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const {user, setUser} = useContext(UserContext);

    let navigate = useNavigate();

    const deconnectUser = (e) => {
        if (user.isConnected)
        {
            setUser({isConnected: false, email: "", pseudo: ""});
            
            let url = "/";
            navigate(url);
        }
    }

    return (
        <>
            <nav className="navigation">
                <h1 className="titre-site">Tournois <br/> de jeux</h1>
                <ul>
                    <div className="nav-start">
                       <li><Link to={ "/" }>Accueil</Link></li>
                        {
                            (user.isConnected)
                            ?
                                <li><Link to={ "/listeTournois" }>Liste des tournois</Link></li>
                            :
                                ""
                        }
                    </div>
                    <div className="nav-end">
                        {
                            (user.isConnected)
                            ?
                                <>
                                    <p>{user.pseudo}</p>
                                    <button onClick={deconnectUser}>Se déconnecter</button>
                                </>
                            :
                                <>
                                    <li><Link to={ "/connexion" }>Se connecter</Link></li>
                                    <li><Link to={ "/inscription" }>S'inscrire</Link></li>
                                </>
                        }
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Nav;