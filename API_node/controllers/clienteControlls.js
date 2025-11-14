const express = require('express');
const router = express.Router();


//Importando os módulos
const Cliente = require('../models/clientes');
const Endereco = require('../models/endereco');
const Status = require('../models/status_cliente');
const Telefone = require('../models/telefone');

//Busca pelo cliente (get)
router.get('/', async (req, res) => {
    const cliente = await Cliente.findAll();
    const endereco = await Endereco.findAll();
    const status = await Status.findAll();
    const telefone = await Telefone.findAll();

    res.status(200).json({ cliente, endereco, status, telefone });
});

//Cadastro do cliente (Post)
router.post('/', async (req, res) => {
    const { nome_cliente } = req.body;
    const { limite_fiado } = req.body;
    const { fk_status } = req.body;
    const { fk_endereco } = req.body;
    const { fk_telefone } = req.body;

    const { status } = req.body;

    const { telefone } = req.body;
    const { tipo_telefone } = req.body;

    const { rua } = req.body;
    const { numero } = req.body;
    const { bairro } = req.body;
    const { complemento } = req.body;

    const newClient = await Cliente.create({ nome_cliente, limite_fiado, fk_status});
    const fk_cliente = newClient.id_cliente;
    const newStatus = await Status.create({ status });
    const newEndereco = await Endereco.create({ rua, numero, bairro, complemento, fk_cliente: fk_cliente });
    const newTelefone = await Telefone.create({ telefone, tipo_telefone, fk_cliente: fk_cliente });

    res.status(200).json({ message: 'Cadastro feito com sucesso!' });
});

//Busca por id o cliente (Get)
router.get('/:id', async (req, res) => {
    //const id = req.params
    const cliente = await Cliente.findByPk(id);
    const status = await Status.findByPk(req.params.id);
    const endereco = await Endereco.findAll({ where: { fk_cliente: id }});
    const telefone = await Telefone.findAll({ where: { fk_cliente: id }});

    res.status(200).json({ cliente, status, endereco, telefone });
});

//Deletar cliente por id (delete)
router.delete('/:id', async (req, res) => {
    await Cliente.destroy({
        where: {
            id_clientes: req.params.id,
        },
    });

    await Status.destroy({
        where: {
            id_status: req.params.id,
        },
    });

    await Endereco.destroy({
        where: {
            id_endereco: req.params.id,
        },
    });

    await Telefone.destroy({
        where: {
            id_telefone: req.params.id,
        },
    });

    res.status(200).json({ message: 'Cliente excluído com sucesso!' })
});

//Alterar Cliente por id (Put)
router.put('/:id', async (req, res) => {
    const { nome_cliente } = req.body;
    const { limite_fiado } = req.body;
    const { fk_status } = req.body;
    const { fk_endereco } = req.body;
    const { fk_telefone } = req.body;

    await Cliente.update(
        { nome_cliente, limite_fiado, fk_status, fk_telefone, fk_endereco },
        {
            where: { id_clientes: req.params.id },
        }
    );

    const { status } = req.body;
    await Status.update(
        { status },
        {
            where: { id_status: req.params.id },
        }
    );

    const { telefone } = req.body;
    const { tipo_telefone } = req.body;
    const { fk_cliente } = req.body;

    await Telefone.update(
        { telefone, tipo_telefone, fk_cliente },
        {
            where: { id_telefone: req.params.id },
        }
    );

    const { rua } = req.body;
    const { numero } = req.body;
    const { bairro } = req.body;
    const { complemento } = req.body;

    await Endereco.update(
        { rua, numero, bairro, complemento, fk_cliente },
        {
            where: { id_endereco: req.params.id },
        }
    );

    res.status(200).json({ message: 'Atualização do cliente feita com sucesso!' });

});

module.exports = router;