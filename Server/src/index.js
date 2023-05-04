
const { getCharById } = require('./controllers/getCharById');

const http = require('http');
const PORT = 3001;


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        // let id = Number(req.url.slice(-1)); //split('/').at(-1)
        let id = req.url.split('/').at(-1)

        getCharById(res, id)
    }

}).listen(PORT, console.log('port on 3001'))