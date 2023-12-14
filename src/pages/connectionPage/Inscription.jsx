import { useContext, useRef, useState } from 'react';
import '../../assets/css/inscription.css'
import { UserContext } from '../../context/UserProvider';
import { addUser } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';


let isPseudoValid;
let isEmailValid;
let isPasswordValid;
let isCGUAccepted;

const Inscription = () => {
    const {user, setUser} = useContext(UserContext);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const pseudoInput = useRef();
    const emailInput = useRef();
    const mdpInput = useRef();
    const errorMessageEmail = useRef();
    const errorMessageMdp = useRef();

    let navigate = useNavigate();

    const validateInputs = (e) => {
        switch (e.target.name)
        {
            case "pseudo":
                if (e.target.value.length >= 1)
                {
                    isPseudoValid = true;
                }
                else
                {
                    isPseudoValid = false;
                }
                break;
            case "email":
                if (e.target.value.length >= 7 && e.target.value.includes("@") && e.target.value.includes("."))
                {
                    isEmailValid = true;
                    errorMessageEmail.current.innerText = "";
                }
                else
                {
                    isEmailValid = false;
                    errorMessageEmail.current.innerText = "Veuillez entrer un email valide !";
                }
                break;
            case "password":
                if (e.target.value.length >= 4 && /[A-Z]/.test(e.target.value) && /[0-9]/.test(e.target.value) && /[a-z]/.test(e.target.value))
                {
                    isPasswordValid = true;
                    errorMessageMdp.current.innerText = "";
                }
                else
                {
                    isPasswordValid = false;
                    errorMessageMdp.current.innerText = "Veuillez choisir un mot de passe valide ! (1 majuscule, 1 minuscule, 1 chiffre, 4 caractères minimum)";
                }
                break;
            case "acceptCGU":
                e.target.checked ? isCGUAccepted = true: isCGUAccepted = false;
                break;
        }

        if (isPseudoValid && isEmailValid && isPasswordValid && isCGUAccepted)
        {
            setIsButtonDisabled(false);
        }
        else
        {
            setIsButtonDisabled(true);
        }
    }

    const validateForm = async (e) => {
        e.preventDefault();

        let newUser = {
            "pseudo": pseudoInput.current.value,
            "email": emailInput.current.value,
            "mdp": mdpInput.current.value
        }
        
        addUser(newUser).then(data => {
            if (data.success === true)
            {
                setUser({isConnected: true, pseudo: pseudoInput.current.value, email: emailInput.current.value});
                let url = "/listeTournois";
                navigate(url);
            }
            else
            {
                errorMessageEmail.current.innerText = data.error;
            }
        })
    }

    return (
        <>
            <div className="Inscription">
                <h1>Inscription</h1>
                <form>
                    <input type="text" name="pseudo" placeholder="Entrez votre pseudonyme" onInput={validateInputs} ref={pseudoInput}/>
                    <input type="text" name="email" placeholder="Entrez votre email" onInput={validateInputs} ref={emailInput}/>
                    <span ref={errorMessageEmail}></span>
                    <br/>
                    <input type="password" name="password" placeholder="Entrez votre mdp" onInput={validateInputs} ref={mdpInput}/>
                    <span ref={errorMessageMdp}></span>
                    <br/>
                    <br/>
                    <input type="checkbox" name="acceptCGU" onInput={validateInputs}/>
                    <label>J'accepte les Conditions Générales d'utilisation</label>
                    <button type="submit" disabled={isButtonDisabled} onClick={validateForm}> Valider </button>
                    <br/>
                    <br/>
                    <p>Vous êtes déjà membre? <Link to={"/connexion"}>Connexion</Link></p>

                </form>
            </div>
        </>
    );
};
        
export default Inscription;
