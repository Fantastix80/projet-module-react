import '../../assets/css/inscription.css'


const Inscription = () => {
    return (
        <>
            <div className="Inscription">
                <h1>Inscription</h1>
                <form>
                    <input
                    type="text"
                    name="pseudo"
                    placeholder="Entrez votre pseudonyme"
                    />
                    <div>
                    <input
                    type="text"
                    name="email"
                    placeholder="Entrez votre email"
                    />
                    <span>Message d'erreur *</span>
                    </div>
                    <br/>
                    <div> 
                        <input
                        type="text"
                        name="password"
                        placeholder="Entrez votre mdp"
                    />
                    <span>Message d'erreur *</span>
                    <br/>
                    <br/>

                    <div>
                    <input type="checkbox" id="exampleUniq"/>
                    <label for="exampleUniq">J'accepte les Conditions Générales d'utilisation</label>
                    </div>
                    <br/>
                    
                    <button type="submit">
                    Valider
                    </button>
                    </div>
                </form>
            </div>
        </>
    );
};
        
export default Inscription;
