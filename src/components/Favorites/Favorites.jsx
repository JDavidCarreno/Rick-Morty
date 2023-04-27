import styles from './Favorites.module.css'
import {connect, useDispatch} from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from 'react'



const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }



    return (
        <div>
            <h1 className={styles.h1}> My Favorites</h1>
            <div className={styles.selectContainer}>
                <label className={styles.label}>
                    Order
                    <select className={styles.select} onChange={handleOrder}>
                        <option value="" selected>Order...</option>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                </label>
                
                <label className={styles.label}>
                    Gender
                    <select className={styles.select} onChange={handleFilter}>
                        <option value="" selected> Gender... </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </label>
            </div>
            <div className={styles.cardContainer}>
                {
                    myFavorites?.map((personaje) => {
                        return(
                            <Card 
                                key = {personaje.id}
                                name = {personaje.name}
                                status = {personaje.status}
                                species = {personaje.species}
                                gender = {personaje.gender}
                                origin = {personaje.origin}
                                image = {personaje.image}
                                id = {personaje.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);