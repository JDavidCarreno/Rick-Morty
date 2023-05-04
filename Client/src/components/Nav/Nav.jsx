import SearchBar from "../SearchBar/SearchBar"
import styles from './Nav.module.css'
import logo from '../../img/randmLogo.png'
import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <div className={styles.divNav}>
            <img className={styles.logo} src={logo} alt="Rick and Morty logo" />

            <Link to='/home'>
                <button className={styles.boton}>Home</button>
            </Link>

            <Link to='/about'>
                <button className={styles.boton}>About</button>
            </Link>

            <Link to='/favorites'>
                <button className={styles.boton}>Favorites</button>
            </Link>

            <button className={styles.boton} onClick={props.handleLogout}>LogOut</button>

            <div className={styles.divContainerSearchBar}>
                <SearchBar onSearch={props.onSearch} />
            </div>
            
        </div>
    )
}

export default Nav ;