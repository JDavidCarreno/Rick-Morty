import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   let [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.searchBarDiv}>
         <input className={styles.input} type='search' placeholder='Id...' onChange={handleChange} value={id}/>
         <button className={styles.boton} onClick={() => props.onSearch(id)} >Agregar</button>   
      </div>
   );
}

// onKeyUp
// event === 'Enter'  event.key