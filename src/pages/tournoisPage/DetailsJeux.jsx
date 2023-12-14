import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpHelper } from '../../../httpHelper';

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
    <div>
      <h2>Détails du jeu avec l'ID {id}</h2>
      <h2>{gameDetailsData.title}</h2>
        <img src={gameDetailsData.gameDetails.imgDetailsJeu} alt={gameDetailsData.title} />
      <p>tqt</p>
    </div>
  );
};

export default DetailJeux;

