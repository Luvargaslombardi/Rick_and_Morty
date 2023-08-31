import Card from "./Card";
import {useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import { orderCards, filterCards } from "./Redux/actions";


const Favorites = () => {
   
    // const [aux,setAux] = useState(false)
    // setAux=(!aux);
    const dispatch= useDispatch();
    const myFavorites= useSelector((state)=>state.myFavorites);
    const handlerOrder =(event) => {
dispatch(orderCards(event.target.value))
};

    const handlerFilter= (event) => {
    dispatch (filterCards(event.target.value))
};
 
return (
    <div>

 <select onChange={handlerOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
    </select>
<select onChange={handlerFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option> 
    </select>

    {
    myFavorites?.map(({id,name,status,species,gender,origin,image,onclose})=>{
return (
    <Card>
    key={id}
    name={name}
    status={status}
    species={species}
    gender={gender}
    origin={origin}
    image={image}
    onclose={onclose}
    </Card>
)
})
    }
    </div>
)
};
// const mapStateToProps= (state) =>{
// return {
//     myFavorite: state.myFavorite
// }
// };

export  default Favorites