import SearchBar from "../SearchBar/SearchBar"
import styles from './Nav.module.css'
import logo from '../../img/randmLogo.png'

const Nav = (props) => {
    return(
        <div className={styles.divNav}>
            <img className={styles.logo} src={logo} alt="Rick and Morty logo" />

            <div className={styles.divContainerSearchBar}>
                <SearchBar onSearch={props.onSearch} />
            </div>
            
        </div>
    )
}

export default Nav ;