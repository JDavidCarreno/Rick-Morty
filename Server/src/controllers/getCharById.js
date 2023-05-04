const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => { 
        const { name, gender, species, origin, image, status} = response.data;
        let character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        };
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify(character));
    })
    .catch((error) => {
        res.writeHead(500, {"Content-type": "text/plain"});
        res.end(error.message)
    })
};

module.exports = {
    getCharById
}