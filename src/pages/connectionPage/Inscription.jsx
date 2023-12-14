
const Inscription = () => {
    return (
        <>
            <div className="Connexion">
            <h1>Inscription</h1>
        <form>
        <input
          type="text"
          name="Pseudonyme"
          placeholder="Entrez votre Pseudonyme"
        />
        <br/>
        <input
          type="text"
          name="email"
          placeholder="Entrez votre email"
        />
        <div> 
          <input
            type="text"
            name="password"
            placeholder="Entrez votre mdp"
          />
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
