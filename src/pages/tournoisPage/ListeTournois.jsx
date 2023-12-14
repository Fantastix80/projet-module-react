import React, { useState, useEffect, useContext } from 'react';
import { httpHelper } from '../../../httpHelper';
import '../../assets/css/listeTournois.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

const useRedirectIfNotConnected = (user) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isConnected) {
      navigate("/");
    }
  }, [user, navigate]);
};

const ListeTournois = () => {
    const {user, setUser} = useContext(UserContext);

    useRedirectIfNotConnected(user);

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await httpHelper.get('http://localhost:3000/gameList/');
          setGameData(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);


    return (
      <>
        <div className='parent'>
          {gameData && gameData.map((game) => (
            <div key={game.id} className="card">
              <h2>{game.title}</h2>
              <img src={game.gameDetails.imgJacket} alt={game.title} />
              <Link to={`/detailsJeux/${game.id}`}>Voir les détails</Link>
              <p className="TxtEditeurTournoi">Editeur : {game.gameDetails.developer}</p>
            </div>
          ))}
      </div>
      </>
    );
}    

export default ListeTournois;


