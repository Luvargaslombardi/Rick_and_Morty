import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail= () => {
const {id} = useParams();
const [characters,setCharacters] = useState({});

// useEffect(()=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//         if (data.name) {
//            setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//            window.alert('¡No hay personajes con este ID!');
//         }
//      });
// return setCharacters({});
// }, [id]);  https://rickandmortyapi.com/api/character/
useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters(data);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        if (error.response) {
            console.error("Error de respuesta:", error.response.status);
            // Maneja el error según el código de estado aquí
          } else if (error.request) {
            console.error("Error de solicitud:", error.request);
            // Maneja errores de solicitud (p. ej., problemas de red)
          } else {
            console.error("Error general:", error.message);
            // Maneja otros tipos de errores
          }

            });
  }, [id]);
    return (
<div>
<img src= {characters.image && characters.image} alt={characters.name} />
<h1>Name: "{characters.name && characters.name}" </h1>
<h1>Status: "{characters.status && characters.status}" </h1>
<h1>Specie: "{characters.species && characters.species}" </h1>
<h1>Gender: "{characters.gender && characters.gender}" </h1>
<h1>Origin: "{characters.origin?.name && characters.origin?.name}" </h1>
    
    <Link to="/home">
    <button>Home</button>
    </Link>
    </div>
    )
};

export default Detail;