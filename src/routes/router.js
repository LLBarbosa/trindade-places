const express = require('express');
const router = express.Router();

const usersController = require(`../controllers/users-controller`);
const placesController = require(`../controllers/places-controller`);

const tokenMiddleware = require('../middleware/token-validator');
const placeMiddleware = require('../middleware/place-validator');
const userMiddleware = require('../middleware/user-validator');

router.post('/users', userMiddleware.validateNewUser, usersController.create);
router.post('/sessions', usersController.sessions);

router.post('places', tokenMiddleware.validateToken, placeMiddleware.validateNewPlace, placesController.create);
router.get('places', tokenMiddleware.validateToken, placesController.getAll);
router.delete('/places/:id', tokenMiddleware.validateToken, placesController.destroy);
router.put('/places/:id', tokenMiddleware.validateToken, placesController.update);


module.exports = router;