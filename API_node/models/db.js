const Sequelize = require('sequelize');

//Conexão com o banco de dados
const sequelize = new Sequelize('padaria', 'root', 'root', {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};