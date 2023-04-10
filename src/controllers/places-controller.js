const Place = require('../models/place');

//[M1S09] Ex 4 - Rota GET
async function getAll(request, response) {
    try {
        const places = await Place.findAll();
        return response.json(places);
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Unable to resolve operation!!"});
        
    }
}

//[M1S09] - Ex 3 - Rota POST]
async function create(request, response) {
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
        response.status(500).json({message: "Unable to resolve operation!!"});
    }
}

//[M1S09] Ex 6 - Rota PUT
async function update(request, response) {
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
        response.status(500).json({message: "Unable to resolve operation!!"});
    }
}

//[M1S09 Ex 5 - Rota DELETE]
async function destroy(request, response) {
    try {
        const id = parseInt(request.params.id);
        if (Number.isNaN(id)) return res.status(400).end();
        Place.destroy({
            where: {id}
        });
        response.status(200).json({message: "Successfuly deleted!!" });
    } catch(error) {
        console.log(error);
        response.status(500).json({message: "Unable to resolve operation!!"});
    }
}

function updateIfPresent(place, value, key) {
    if (value) {
        place[key] = value;
    }
}

module.exports = {getAll, create, update, destroy}