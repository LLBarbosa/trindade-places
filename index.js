const { response } = require('express');
const express = require('express');
const connection = require('./src/database')
const Place = require('./src/models/place');
const app = express();

app.use(express.json()) //obrigatório

connection.authenticate();
connection.sync({alter: true});

//[M1S09 - Ex 3 - Rota POST]
app.post('/places', async (request, response) => {
    try {
        
        const data = {
            name: request.body.name,
            telephone: request.body.telephone,
            opening_hours: request.body.opening_hours,
            description: request.body.description,
            latitude: request.body.latitude,
            longitude: request.body.longitude
        } 

        const place = await Place.create(data);

        response.status(201).json(place);


    } catch (error) {
        console.log(error);
        response.status(500).json({message: "It's not possible to resolve the operation"});
    }
})
//[M1S09] Ex 4 - Rota GET
app.get('/places', async (request, response) => {
    try {
        const places = await Place.findAll();
        return response.json(places);
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "It's not possible to resolve the operation"});
        
    }
})


app.delete('/places/:id', async (request, response) => { 
    try {
        const id = parseInt(request.params.id);
        if (Number.isNaN(id)) return res.status(400).end();
        Place.destroy({
            where: {id}
        });
        response.status(200).json({ "mensagem": "Deletado com sucesso" });
    } catch(error) {
        console.log(error);
        response.status(500).json({message: "It's not possible to resolve the operation"});
    }
});

app.put('/places/:id', async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const {
            name,
            telephone,
            opening_hours,
            description,
            latitude,
            longitude
        } = request.body;
        if (Number.isNaN(id)) return res.status(400).end();
        const place = await Place.findByPk(id);
        updateIfPresent(place, name, 'name');
        updateIfPresent(place, telephone, 'telephone');
        updateIfPresent(place, opening_hours, 'opening_hours');
        updateIfPresent(place, description, 'description');
        updateIfPresent(place, latitude, 'latitude');
        updateIfPresent(place, longitude, 'longitude');
        const placeUpdated = await place.save();
        return response.json(placeUpdated);
    } catch(error) {
        console.log(error);
        response.status(500).json({message: "It's not possible to resolve the operation"});
    }
})

function updateIfPresent(place, value, key) {
    if (value) {
        place[key] = value;
    }
}

const PORT = 3333;

//[MS09] - Ex 1 - Projeto Trindade Places
app.listen(PORT, () => {
    console.log('Server up on port 3333!');
})