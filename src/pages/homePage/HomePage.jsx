import '../../assets/css/homePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div class="text-container">
                <p>Bienvenue sur notre Site internet!<br /></p>
                <p>Plongez dans notre univers dédié aux jeux vidéo et participez à des tournois e-sport passionnants !<br />
                    Il vous suffit de vous connecter ou de vous créez un compte si ce n'est pas déjà fait.</p>
            </div>
            <br />
            <div class="button-container">
                <div class="button-container">

                    <li><Link to={"/connexion"} className="custom-button">Se connecter</Link></li>
                    <br />
                    <br />

                    <li><Link to={"/inscription"} className="custom-button">S'inscrire</Link></li>

                </div>

            </div>

        </>
    );
};

export default HomePage;