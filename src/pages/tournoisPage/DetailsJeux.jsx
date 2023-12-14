import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { httpHelper } from '../../../httpHelper';
import '../../assets/css/detailsJeux.css';
import { UserContext } from '../../context/UserProvider';
import { inscriptionTournois, isInscrit } from '../../services/api';


const useRedirectIfNotConnected = (user) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isConnected) {
      navigate("/");
    }
  }, [user, navigate]);
};

const DetailJeux = () => {
  const {user, setUser} = useContext(UserContext);

  const navigate = useNavigate();
  useRedirectIfNotConnected(user);

  const { id } = useParams();
  const [gameDetailsData, setGameDetailsData] = useState({});
  const [isInscriptionButtonActive, setIsInscriptionButtonActive] = useState(true);

  isInscrit({"email": user.email, "idTournois": id}).then(data => {
    if (data.success === true)
    {
      setIsInscriptionButtonActive(false);
    }
    else
    {
      setIsInscriptionButtonActive(true);
    }
  });

  const validateInscription = (e) => {
    e.preventDefault();

    inscriptionTournois({"email": user.email, "idTournois": id}).then(data => {
      if (data.success)
      {
        navigate("/listeTournois");
      }
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpHelper.get(`http://localhost:3000/gameList/${id}`);
        setGameDetailsData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

    return (
        <div>
            <img className="imgFond" src={gameDetailsData?.gameDetails?.imgDetailsJeu} alt={gameDetailsData?.title} />
            <h2 className='GameTitleDetails'>{gameDetailsData?.title}</h2>
            <p className='GameDescriptionDetails'>{gameDetailsData?.gameDetails?.description}</p>
            <p className='GameDeveloperDetails'>Editeur : {gameDetailsData?.gameDetails?.developer}</p>
            <p className='GameReleaseDateDetails'>Plateforme : {gameDetailsData?.gameDetails?.platform ? Object.keys(gameDetailsData.gameDetails.platform).join(', ') : 'N/A'}</p>

            <button className='btnInscription' disabled={!isInscriptionButtonActive} onClick={validateInscription}>
              {
                isInscriptionButtonActive
                ?
                  <span>S'inscrire au tournoi</span>
                :
                  <span>Vous êtes déjà inscrit</span>
              }
            </button>
        </div>
    );
};

export default DetailJeux;

