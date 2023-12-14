
const Connexion = () => {
    return (
        <>
            <div className="Connexion">
            <h1>Connexion</h1>
        <form>
        <input
          type="text"
          name="email"
          placeholder="Entrez votre email"
        />
        <br/>
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
        
export default Connexion;
