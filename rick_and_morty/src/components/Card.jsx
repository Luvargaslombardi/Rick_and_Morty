import { Link } from "react-router-dom";
import { addFav, removeFav } from "./Redux/actions";
import {connect} from "react-redux"
import { useState, useEffect } from "react";

export function Card (props) {
const {id, name, status, species, gender, origin, image, onClose, addFav,removeFav, myFavorites} = props   
const [isFav,setIsFavs] = useState(false);

const handleFavorite = () => {
   isFav ? removeFav(id): addFav({id, name, status, species, gender, origin, image, onClose})
   setIsFavs(!isFav)
};
   
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFavs(true);
      }
   });
}, [myFavorites, id]);

   return (
      <div>
  <button onClick={handleFavorite}>{isFav? "❤️" : "🤍"}</button>
      
 <button onClick={()=>onClose(id)}>X</button>
      <Link to={`/detail/${id}`} key={id}>

   
         <h2>Name:{name} </h2>
         <h2>Status:{status}</h2>
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         <h2>Origin:{origin}</h2>
         <img src={image} alt={name} />
      </Link>
 </div>
   ); 
} 
const mapDispatchToProps= (dispatch) => {
   return {
      addFav: (characters) =>  dispatch(addFav(characters)),
      removeFav: (id) => dispatch(removeFav(id)),
   };
}
const mapStateToProps = (state) => {
return {
   myFavorites: state.myFavorites,
}
};


export default connect (mapStateToProps,mapDispatchToProps) (Card)