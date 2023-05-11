let myFavorites = [];

const postFav = (req, res) => {
    // const { personaje } = req.body;
    // myFavorites.push(personaje);
    // return res.json(myFavorites);
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites)
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    const filtered = myFavorites.filter((personaje) => {
       return personaje.id !== +id;
    });
    myFavorites = filtered
    return res.json(myFavorites)
    // myFavorites = myFavorites.filter((personaje) => {
    //     return personaje.id !== id;
    // });
    // return res.json(myFavorites);

};

module.exports = {
    postFav,
    deleteFav
}