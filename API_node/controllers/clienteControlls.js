const express = require('express');
const router = express.Router();


//Importando os módulos
const Cliente = require('../models/clientes');
const Endereco = require('../models/endereco');
const Status = require('../models/status_cliente');
const Telefone = require('../models/telefone');

//Busca pelo cliente (get)
router.get('/', async (req, res) => {
    try {
        const cliente = await Cliente.findAll();
        const endereco = await Endereco.findAll();
        const status = await Status.findAll();
        const telefone = await Telefone.findAll();

        res.status(200).json({ cliente, endereco, status, telefone });

    } catch {

        res.status(500).json({ erro: error.message });

    }
});

//Cadastro do cliente (Post)
router.post('/', async (req, res) => {
    try {
        const { nome_cliente, limite_fiado } = req.body;

        const { status_cli } = req.body;

        const { telefone_cliente, tipo_telefone } = req.body;

        const { rua, numero, bairro, complemento } = req.body;

        const newClient = await Cliente.create({ nome_cliente, limite_fiado});

        const id_cliente = newClient.id_cliente;

        const newStatus = await Status.create({ status_cli, fk_cliente: id_cliente });
        const newEndereco = await Endereco.create({ rua, numero, bairro, complemento, fk_cliente: id_cliente });
        const newTelefone = await Telefone.create({ telefone_cliente, tipo_telefone, fk_cliente: id_cliente });

        res.status(200).json({ message: 'Cadastro feito com sucesso!' });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Busca por id o cliente (Get)
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cliente = await Cliente.findByPk(id);
        const status = await Status.findAll({ where: { fk_cliente: id }});
        const endereco = await Endereco.findAll({ where: { fk_cliente: id }});
        const telefone = await Telefone.findAll({ where: { fk_cliente: id }});

        res.status(200).json({ cliente, status, endereco, telefone });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Deletar cliente por id (delete)
router.delete('/:id', async (req, res) => {
    try {

        const id = req.params.id;

        await Status.destroy({
            where: {
                fk_cliente: id,
            },
        });

        await Endereco.destroy({
            where: {
                fk_cliente: id,
            },
        });

        await Telefone.destroy({
            where: {
                fk_cliente: id,
            },
        });

        await Cliente.destroy({
            where: {
                id_cliente: id,
            },
        });

        res.status(200).json({ message: 'Cliente excluído com sucesso!' })

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Alterar Cliente por id (Put)
router.put('/:id', async (req, res) => {
    try {

        const id = req.params.id;

        const { nome_cliente, limite_fiado } = req.body;
        const { status_cli } = req.body;
        const { telefone_cliente, tipo_telefone } = req.body;
        const { rua, numero, bairro, complemento } = req.body;

        await Cliente.update(
            { nome_cliente, limite_fiado },
            {
                where: { id_clientes: id },
            }
        );

        await Status.update(
            { status_cli },
            {
                where: { fk_cliente: id },
            }
        );

        await Telefone.update(
            { telefone_cliente, tipo_telefone },
            {
                where: { fk_cliente: id },
            }
        );

        await Endereco.update(
            { rua, numero, bairro, complemento },
            {
                where: { fk_cliente: id },
            }
        );

        res.status(200).json({ message: 'Atualização do cliente feita com sucesso!' });

    } catch (error) {

        res.status(500).json({ erro: error.message });
        
    }

});

module.exports = router;