import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={styles.searchBarDiv}>
         <input className={styles.input} type='search' placeholder='Id...' />
         <button className={styles.boton} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
