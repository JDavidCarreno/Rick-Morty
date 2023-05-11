import { addFav, removeFav } from '../../redux/actions';
import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';

function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id, myFavorites, addFav, removeFav} = props;

   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(props)
      }
      
   }

   const location = useLocation();

   return (
      <div className={styles.divCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {
            location.pathname !== '/favorites' && <button className={styles.button} onClick={()=>onClose(id)}>X</button>
         }
         <h2 className={styles.h2}><Link to = {`/detail/${id}`}>{name}</Link></h2>
         <h2 className={styles.h2}>{status}</h2>
         <h2 className={styles.h2}>{species}</h2>
         <h2 className={styles.h2}>{gender}</h2>
         <h2 className={styles.h2}>{origin?.name}</h2>
         <img className={styles.img} src={image} alt="Character" />
      </div>
   );
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps) (Card);

