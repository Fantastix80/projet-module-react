import { useContext } from 'react';
import '../../assets/css/inscription.css'
import { UserContext } from '../../context/UserProvider';


const Inscription = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <div className="Inscription">
                <h1>Inscription</h1>
                <form>
                    <input type="text" name="pseudo" placeholder="Entrez votre pseudonyme" />
                    <input type="text" name="email" placeholder="Entrez votre email" />
                    <span>Message d'erreur *</span>
                    <br/>
                    <input type="text" name="password" placeholder="Entrez votre mdp"/>
                    <span>Message d'erreur *</span>
                    <button type="submit">Valider</button>
                </form>
            </div>
        </>
    );
};
        
export default Inscription;
