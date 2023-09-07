import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import style from "../Detail/Detail.module.css" // Asegúrate de importar el archivo de estilos adecuado

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          setError("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        setError("Error al cargar el personaje. Por favor, inténtalo de nuevo más tarde.");
      });
  }, [id]);

  return (
    <div className={style.detailContainer}>
      {error ? (
        <div className={style.error}>{error}</div>
      ) : (
        <div>
          <img src={character.image} alt={character.name} />
          <h1>Name: "{character.name}" </h1>
          <h1>Status: "{character.status}" </h1>
          <h1>Species: "{character.species}" </h1>
          <h1>Gender: "{character.gender}" </h1>
          <h1>Origin: "{character.origin?.name}" </h1>
        </div>
      )}

      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Detail;
