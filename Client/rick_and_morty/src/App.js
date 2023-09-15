import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const response = await axios.get(URL, {
        params: {
          email,
          password
        }
      });

      const { access } = response.data;

      if (access) {
        setAccess(access);
        navigate('/home');
      } else {
        // Manejar caso en el que el acceso es falso.
        console.log('El acceso no está permitido.');
      }
    } catch (error) {
      // Manejar errores de la petición
      console.error('Hubo un error al iniciar sesión:', error);
    }
  }

  async function onSearch(id) {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert('¡No hay personajes con este ID!');
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  };

  return (
    <div className='App'>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path='/' element={<Forms login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
