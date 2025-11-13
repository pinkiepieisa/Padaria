const db = require('./db');
const pagamento = db.sequelize.define('pagamento', {
    id_pagamento: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_pagamento: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
}, {freezeTableName: true});

pagamento.sync({force: false});
module.exports = pagamento;