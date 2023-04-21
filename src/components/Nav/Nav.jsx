import SearchBar from "../SearchBar/SearchBar"
import styles from './Nav.module.css'
import logo from '../../img/randmLogo.png'
import { Link } from "react-router-dom"

const Nav = (props) => {
    console.log(props);
    return(
        <div className={styles.divNav}>
            <img className={styles.logo} src={logo} alt="Rick and Morty logo" />

            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/about'>
                <button>About</button>
            </Link>

            <div className={styles.divContainerSearchBar}>
                <SearchBar onSearch={props.onSearch} />
            </div>
            
        </div>
    )
}

export default Nav ;