const User = require('../models/user');

//[M1S10] - Ex 2 - Rota POST
async function create(request, response) {
    try {
        const data = {
            name: request.body.name,
            email: request.body.email,
            username: request.body.username,
            password: request.body.password
        }
        const user = await User.create(data);
        response.status(201).json(user);
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Unable to resolve operation!!"});
    }
}
//[M1S10] Ex 3 - Rota de sessão e jwt
async function sessions(request, response) {
    try {
        const userInDatabase = await User.findOne({
            where: {
                username: request.body.username
            }
        });

        if (!userInDatabase) {
            return response.status(404).json({ message: 'Nome de usuário ou senha incorretos' })
        }

        const token = jwt.sign(
            {
                id: userInDatabase.id,
            },
            process.env.CHAVE_DO_TOKEN,
            {
                expiresIn: '1h'
            }
        )

        response.json({ token: token })
    } catch (error) {
        console.log(error)
        response.status(500).json({message: "Unable to resolve operation!!"});
    }
}

module.exports = { create, sessions }