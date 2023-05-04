import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';


function App() {
   let [characters, setCharacters] = useState([]);
   
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
      const parseId = parseInt(id)
      let filteredCharacters = characters.filter((character)=> {
         return character.id !== parseId;
      });
      setCharacters(filteredCharacters);
   }

   const location = useLocation();   // para cuando quiero saber sobre una ruta especial /  preguntar si estoy en /
   const navigate = useNavigate();  // para navegar a otra ruta

   let [access, setAccess] = useState(false);

   const EMAIL = 'carrenojuann97@gmail.com';
   const PASSWORD = 'password1';

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   const handleLogout = () => {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} handleLogout={handleLogout}/>}
         <Routes>
            <Route path='/' element = {<Form login ={login}/>}/>
            <Route path='/home' element = {<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path='/about' element = {<About />}/>
            <Route path='/detail/:id' element = {<Detail/>}/>
            <Route path='/favorites' element = {<Favorites />}/>
         </Routes>
         
      </div>
   );
}

export default App;
