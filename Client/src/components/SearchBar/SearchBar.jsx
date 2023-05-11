import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   let [id, setId] = useState('');

   const handleChange = (event) => {  //event tiene propiedad target (la etiqueta, en este caso input), y value.
      setId(event.target.value)
   }

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
         setId("")
      }
   }

   return (
      <div className={styles.searchBarDiv}>
         <input className={styles.input} type='search' placeholder='type Id...' onChange={handleChange} value={id} onKeyUp={handleEnter}/>
         <button className={styles.boton} onClick={() => props.onSearch(id)} >Add</button>   
      </div>
   );
}

// onKeyUp
// event === 'Enter'  event.key