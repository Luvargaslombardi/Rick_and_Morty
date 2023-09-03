import React, { useState } from "react";
import style from "../SearchBar/SearchBar.module.css"; // Asegúrate de importar el archivo de estilos adecuado

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
    setId(""); // Limpiar el campo de búsqueda después de la búsqueda
  };

  return (
    <div className={style.searchBar}>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Buscar personaje por ID"
      />
      <button onClick={handleSearch}>AGREGAR</button>
    </div>
  );
};

export default SearchBar;
