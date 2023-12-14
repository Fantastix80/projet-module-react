import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpHelper } from '../../../httpHelper';
import '../../assets/css/detailsJeux.css';

const DetailJeux = () => {
  const { id } = useParams();
  const [gameDetailsData, setGameDetailsData] = useState({});

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
        <div className='container'>
            <img className="imgFond" src={gameDetailsData?.gameDetails?.imgDetailsJeu} alt={gameDetailsData?.title} />
            <h1 className='GameTitleDetails'>{gameDetailsData?.title}</h1>
            <p className='GameDescriptionDetails'>{gameDetailsData?.gameDetails?.description}</p>
            <p className='GameDeveloperDetails'>Editeur : {gameDetailsData?.gameDetails?.developer}</p>
            <p className='GameReleaseDateDetails'>Plateforme : {gameDetailsData?.gameDetails?.platform ? Object.keys(gameDetailsData.gameDetails.platform).join(', ') : 'N/A'}</p>
            <button className='btnInscription'>S'inscrire au tournoi</button>
        </div>
    );
};

export default DetailJeux;

