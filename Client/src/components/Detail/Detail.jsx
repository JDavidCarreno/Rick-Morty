import styles from './Detail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h1>Detalles</h1>
            {
                character ? (
                    <div>
                        <h2 className={styles.prueba}>Name: {character.name}</h2>
                        <h2 className={styles.prueba}>Staus: {character.status}</h2>
                        <h2 className={styles.prueba}>Specie: {character.species}</h2>
                        <h2 className={styles.prueba}>Gender: {character.gender}</h2>
                        <h2 className={styles.prueba}>Origin: {character.origin?.name}</h2>
                        <img src={character.image} alt={character.name} />
                    </div>
                )
                 : (
                    ""
                 )
            }
        </div>
    )
}

export default Detail;