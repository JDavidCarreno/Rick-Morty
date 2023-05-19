// const axios = require('axios')

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then((data) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             origin: data.origin,
//             species: data.species,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, {"Content-type": "application/json"});
//         res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//         res.writeHead(500, {"Content-type": "text/plain"});
//         res.end(error.message)
//     })
// };

// module.exports = {
//     getCharById
// }

//-------------------------------------------CON EXPRESS--------------------------------------------------

const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
//     const { id } = req.params;
//     axios(`${URL}${id}`)
//     .then((result) => result.data)
//     .then((data) => {
//         if(data) {
//             // const { id, status, name, species, origin, image, gender } = data;
//             return res.json({id: data.id, status: data.status, name: data.name, species: data.species, origin: data.origin, image: data.image, gender: data.gender});
//         } else {
//             return res.status(404).send('Not found')
//         }

//     })
//     .catch((error) => {
//         return res.status(500).send(error.message)
//     })
// }

const getCharById = async (req, res) => {
    const { id } =req.params;
    try {
        const { data } = await axios(URL + id);
        return data ? res.status(200).json({id: data.id, status: data.status, name: data.name, species: data.species, origin: data.origin, image: data.image, gender: data.gender}) : res.status(404).send('Not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports =  getCharById ;