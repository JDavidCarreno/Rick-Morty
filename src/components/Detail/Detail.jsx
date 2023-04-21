import styles from './Detail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     console.log(character.name);

    return(
        <div>
            {/* <h2 className={styles.prueba}>{character.name}</h2>
            <h2 className={styles.prueba}>{character.status}</h2>
            <h2 className={styles.prueba}>{character.species}</h2>
            <h2 className={styles.prueba}>{character.gender}</h2>
            <h2 className={styles.prueba}>{character.origin.name}</h2>
            <h2 className={styles.prueba}>{character.image}</h2> */}
        </div>
    )
}

export default Detail;