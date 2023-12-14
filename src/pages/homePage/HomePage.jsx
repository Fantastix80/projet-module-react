import '../../assets/css/homePage.css'
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <>
            <div className="text-container">
                <p>Bienvenue sur notre Site internet!<br /></p>
                <p>Plongez dans notre univers dédié aux jeux vidéo et participez à des tournois e-sport passionnants !<br />
                    Il vous suffit de vous connecter ou de vous créez un compte si ce n'est pas déjà fait.</p>
            </div>
            <br/>
            <div className="button-container">
                <div className="button-container">
 

                    <li><Link to={ "/connexion" }className="custom-button">Se connecter</Link></li>
                    <br/>
                    <br/>
    
                    <li><Link to={ "/inscription" }className="custom-button">S'inscrire</Link></li>
        
                </div>

            </div>

        </>
    );
};

export default HomePage;