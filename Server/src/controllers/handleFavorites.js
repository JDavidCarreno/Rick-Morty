let myFavorites = [];

const postFav = (req, res) => {
    const { personaje } = req.body;
    myFavorites.push(personaje);
    return res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter((personaje) => {
        return personaje.id !== id;
    });
    return res.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}