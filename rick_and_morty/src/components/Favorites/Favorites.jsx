import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards, removeFav } from "../Redux/actions";
import style from "../Favorites/Favorites.module.css"; // Importa el archivo CSS

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleClose = (id) => {
    dispatch(removeFav(id));
  };

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handlerOrder} className={style.select}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handlerFilter} className={style.select}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
      </select>
      <div className={style.container}>
        {myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={() => handleClose(id)}
              className={style.card}
            >
              {/* Agrega el botón de cierre a la tarjeta */}
              <button
                className={style["close-button"]}
                onClick={() => handleClose(id)}
              >
                X
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
