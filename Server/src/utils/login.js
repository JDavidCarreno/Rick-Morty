const users = require('./users');

const login = (req, res) => {
    const { email, password} = req.query;
    if (email === users[0].email  && password === users[0].password) {
        return res.status(200).json({access: true});
    } else {
        return res.status(200).json({access: false});
    }
};

module.exports = {login};

// let access = false;
// users.forEach((user) => {
//     if(user.email === email && user.password === password) access = true
// })