import React from 'react';
import { Link } from 'react-router-dom';

const Vache = () => {
  return (
    <div className="userTable">
      {/* Ajout d'un texte descriptif pour rendre le lien plus compréhensible */}
      <h2>Gestion des Vaches</h2>
      <Link to="/add" className="addVacheButton">
        Ajouter une Vache
      </Link>
    </div>
  );
};

export default Vache;
