
// const { getCharById } = require('./controllers/getCharById');

// const http = require('http');
// const PORT = 3001;


// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if (req.url.includes("/rickandmorty/character")) {
//         // let id = Number(req.url.slice(-1)); //split('/').at(-1)
//         let id = req.url.split('/').at(-1)

//         getCharById(res, id)
//     }

// }).listen(PORT, console.log('port on 3001'))

//--------------------------------- CON EXPRESS -------------------------------------------------------------------

// const express = require('express');
// const server = express();
const { server } = require('./app')
const PORT = 3001;

// const router = require('./routes/index');
// const cors = require('cors');

// server.use(cors());

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

// server.use(express.json());

// server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})