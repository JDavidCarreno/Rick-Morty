const { User } = require('../DB_connection');

const login = async (req, res) => {
    try {
        const { email, password } =  req.query;

        if(!email || !password) return res.status(400).send('Faltan datos');

        // const user = await User.findAll({
        //     where: {
        //         email
        //     }
        // });

        const user = await User.findOne({
            where: {
                email
            }
        });

        if(!user) return res.status(404).send('Usuario no encontrado');

        // user.forEach(element => {
        //     if(element.password === password) res.status(200).json({access: true});
        // });

        // return res.status(403).json({error: 'Contraseña incorrecta'})

        return user.password === password ? res.status(200).json({access: true}) : res.status(403).send('Contraseña incorrecta');

    } catch (error) {
        return res.status(404).json({error: error.message})
    }
};

module.exports = login;