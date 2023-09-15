import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SORT = "SORT";
export const FILTER = "FILTER";
export const RESET = "RESET";


export const addFav = async (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try {
     const response = await axios.post(endpoint, character);
     const data = response.data;
     return {
       type: 'ADD_FAV',
       payload: data,
     };
   } catch (error) {
     // Manejar el error de manera adecuada
     console.error('Error al agregar favorito:', error);
   }
 };
 
 export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
     try {
       const response = await axios.delete(endpoint);
       const data = response.data;
       dispatch({
         type: 'REMOVE_FAV',
         payload: data,
       });
     } catch (error) {
       // Manejar el error de manera adecuada
       console.error('Error al eliminar favorito:', error);
     }
   };
 };
 



export const filterCards = (gender)=> {
    return {type:"FILTER", payload:gender}
};

export const orderCards= (order)=>{
    return {type:"ORDER",payload:order}
};