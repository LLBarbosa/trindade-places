const { Sequelize } = require('sequelize');
const connection = require('../database');

// [M1S10] Ex 1 - Continuando Trindade Places
const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true,
        validate: { isEmail: true }
    },
    username: {
        type: Sequelize.STRING,
        isUnique: true
    },
    password: {
        type: Sequelize.STRING,
        validate: {min: {args: 8, msg: "Minimum 8 characters required in password"}}
    },
});

module.exports = User;