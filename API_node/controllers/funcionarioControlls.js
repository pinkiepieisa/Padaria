const express = require('express');
const router = express.Router();

//Importando os módulos
const Funcionario = require('../models/funcionarios');
const Cargo = require('../models/tipo_cargo');
const { where } = require('sequelize');

//Busca funcionário (get)
router.get('/', async (req, res) => {
    const funcionario = await Funcionario.findAll();
    const cargo =  await Cargo.findAll();

    res.status(200).json(funcionario, cargo);
});

//Cadastrar funcionário
router.post('/', async (req, res) => {
    const { nome_funcionario } = req.body;
    const { fk_cargo } = req.body;

    const newFuncionario = await Funcionario.create({ nome_funcionario, fk_cargo });

    const { nome_cargo } = req.body;

    const newCargo = await Cargo.create({ nome_cargo });

    res.status(200).json({ message: "Funcionário cadastrado com sucesso!" });

});

//Buscar funcionario por id (get)
router.get('/:id', async (req, res) => {
    //const id = req.params;
    const funcionario = await Funcionario.findByPk(req.params.id);
    const cargo = await Cargo.findByPk(req.params.id);

    res.status(200).json(funcionario, cargo);
});

//Deleta funcionário por id
router.delete('/:id', async (req, res) => {
    await Funcionario.destroy({
        where: { id_funcionario: req.params.id },
    });

    await Cargo.destroy({
        where: { id_cargo: req.params.id }
    });

    res.status(200).json({ message: "Funcionário excluído com sucesso!" });
});

//Alterar funcionário por id (put)
router.put('/:id', async (req, res) => {
    const { nome_funcionario } = req.body;
    const { fk_cargo } = req.body;

    await Funcionario.update(
        { nome_funcionario, fk_cargo },
        {
            where: { id_funcionario: req.params.id },
        }
    );

    const { nome_cargo } = req.body;

    await Cargo.update(
        { nome_cargo },
        {
            where: { id_cargo: req.params.id },
        }
    );

    res.status(200).json({ message: 'Funcionário atualizado com sucesso!' });

});

module.exports = router;