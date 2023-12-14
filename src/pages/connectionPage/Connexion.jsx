import { useContext, useRef } from 'react';
import '../../assets/css/connexion.css'
import { connectUser } from '../../services/api';
import { UserContext } from '../../context/UserProvider';
import { useNavigate } from 'react-router-dom';


const Connexion = () => {
    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const emailInput = useRef();
    const mdpInput = useRef();
    const errorMessage = useRef();

    const validateForm = async (e) => {
        e.preventDefault();
    
        let userToConnect = {
            "email": emailInput.current.value,
            "mdp": mdpInput.current.value
        }

        connectUser(userToConnect).then(data => {
            if (data.success === true)
            {
                setUser({
                    isConnected: true,
                    email: data.email,
                    pseudo: data.pseudo
                });
                let url = "/listeTournois";
                navigate(url);
            }
            else
            {
                errorMessage.current.innerText = data.error;
            }
        });
    }

    return (
        <>
            <div className="Connexion">
                <h1>Connexion</h1>
                <form>
                    <input type="text" name="email" placeholder="Entrez votre email" ref={emailInput}/>
                    <input type="text" name="password" placeholder="Entrez votre mdp" ref={mdpInput}/>
                    <br/>
                    <span ref={errorMessage}></span>
                    <button type="submit" onClick={validateForm}>Valider</button>
                </form>
            </div>
    
    
    </>
  );
};
        
export default Connexion;
