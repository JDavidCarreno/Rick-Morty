// const data = require('./utils/data');

const getCharById = require('./controllers/getCharById');

const http = require('http');
const PORT = 3001;


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        let id = Number(req.url.slice(-1));
        // let character = data[id - 1];
        // res.writeHead(200, {"Content-type": "application/json"});
        // res.end(JSON.stringify(character))
        getCharById(res, id)
    }

}).listen(PORT, console.log('port on 3001'))