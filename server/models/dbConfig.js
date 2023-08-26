const { Sequelize } = require('sequelize');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const hostName = process.env.HOSTNAME;
const dataBase = process.env.DATABASE;


const sequelize = new Sequelize(
  `mysql://${username}:${password}@${hostName}/${dataBase}`
  
);
//const sequelize = new Sequelize('mysql://u252525807_dogi:96MoAl96+@sql972.main-hosting.eu/u252525807_dogi');

module.exports = sequelize;
