import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id} = props;
   return (
      <div className={styles.divCard}>
         <button className={styles.button} onClick={()=>onClose(id)}>X</button>
         <h2 className={styles.h2}><Link to = {`/detail/${id}`}>{name}</Link></h2>
         <h2 className={styles.h2}>{status}</h2>
         <h2 className={styles.h2}>{species}</h2>
         <h2 className={styles.h2}>{gender}</h2>
         <h2 className={styles.h2}>{origin.name}</h2>
         <img className={styles.img} src={image} alt="Character" />
      </div>
   );
}


