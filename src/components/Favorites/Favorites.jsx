import {connect} from 'react-redux'
import Card from '../Card/Card'


const Favorites = ({myFavorites}) => {


    return (
        <div>
            <h1>My Favorites</h1>
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
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);