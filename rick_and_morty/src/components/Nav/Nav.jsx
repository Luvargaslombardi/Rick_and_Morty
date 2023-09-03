import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import style from "../Nav/Nav.module.css"; // Asegúrate de importar el archivo de estilos adecuado

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.navBar}>
      <Link to="/home" className={style.logo}>
        Rick & Morty
      </Link>
      <SearchBar onSearch={onSearch} />
      <nav className={style.navLinks}>
        <NavLink to="/home" activeClassName={style.activeLink}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={style.activeLink}>
          About
        </NavLink>
        <NavLink to="/favorites" activeClassName={style.activeLink}>
          Favorites
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
