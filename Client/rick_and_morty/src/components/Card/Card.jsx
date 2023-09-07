import React from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../Redux/actions";
import style from "../Card/Card.module.css";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;
  const [isFav, setIsFavs] = React.useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({
          id,
          name,
          status,
          species,
          gender,
          origin,
          image,
          onClose,
        });
    setIsFavs(!isFav);
  };

  React.useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFavs(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <div className={style.cardFront}>
          <img src={image} alt={name} className={style.cardImage} />
          <button onClick={handleFavorite} className={style.favoriteButton}>
            {isFav ? "❤️" : "🤍"}
          </button>
          <button onClick={() => onClose(id)} className={style.closeButton}>
            X
          </button>
        </div>
        <div className={style.cardBack}>
          <h2>Name: {name}</h2>
          <h2>Status: {status}</h2>
          <h2>Species: {species}</h2>
          <h2>Gender: {gender}</h2>
          <h2>Origin: {origin}</h2>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (characters) => dispatch(addFav(characters)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
