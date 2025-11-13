const Sequelize = require('sequelize');

//Conexão com o banco de dados
const sequelize = new Sequelize('padaria', 'root', 'root', {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
});

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar " + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};