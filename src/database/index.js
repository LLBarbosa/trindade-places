const Sequelize = require('sequelize')

const PASSWORD = 'postgres';
const USER = 'postgres';

const connection = new Sequelize({
    dialect: 'postgres', // qual banco vai se conecta
    host: 'localhost', // onde o banco está ?
    username: USER, //qual usuario
    password: PASSWORD, // qual senha 
    port:'5432', // qual porta
    database: 'places_database', //qual nome de dados
    define: {
      timestamps: true,  
      underscored: true,
      underscoredAll: true,
    },
  })

  module.exports= connection;