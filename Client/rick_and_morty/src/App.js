import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import {useState} from 'react';
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';
const  EMAIL = "any.vargas231095@gmail.com"
const PASSWORD= "123456"

function App() {
   const [characters, setCharacters]= useState([]);
   const location = useLocation();

//  const onSearch = (id) => {
//    setCharacters([...characters,example])
const navigate = useNavigate();
const [access,setAccess] = useState(false);

function login(userData){
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess (true)
      navigate("/home");
   }
}

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
setCharacters(
   characters.filter (characters => {
      return characters.id !== Number(id)
   })
)   
   };
 
   return (
      <div className='App'>
 {location.pathname !== "/" &&  <Nav onSearch={onSearch} /> }

   <Routes>
    <Route path='/' element= {<Forms login={login} />} />
    <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
   <Route path="/about" element={<About/>} /> 
   <Route path="/detail/:id" element={<Detail/>} /> 
   <Route path="/favorites" element={<Favorites/>} /> 
   </Routes>
</div>

   );
};

export default App;
