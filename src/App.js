import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import { useState } from 'react';
import axios from 'axios';

function App() {
   let [characters, setCharacters] = useState([]);
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
