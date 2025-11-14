const express = require('express');
const router = express.Router();

//Importando os módulos
const Funcionario = require('../models/funcionarios');
const Cargo = require('../models/tipo_cargo');


//Busca funcionário (get)
router.get('/', async (req, res) => {
    try {
        const funcionario = await Funcionario.findAll({ include: {model: Cargo }});

        res.status(200).json({ funcionario });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Cadastrar funcionário
router.post('/', async (req, res) => {
    try {
        const { nome_funcionario, fk_cargo } = req.body;

        // Cria o novo funcionário
        await Funcionario.create({
            nome_funcionario,
            fk_cargo
        });

        res.status(200).json({ message: "Funcionário cadastrado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });
    }

});

//Buscar funcionario por id (get)
router.get('/:id', async (req, res) => {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);

        res.status(200).json({ funcionario });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Deleta funcionário por id
router.delete('/:id', async (req, res) => {
    try {

        await Funcionario.destroy({
            where: { id_funcionario: req.params.id }
        });

        res.status(200).json({ message: "Funcionário excluído com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Alterar funcionário por id (put)
router.put('/:id', async (req, res) => {
    try {

        const { nome_funcionario, fk_cargo } = req.body;

        await Funcionario.update(
            { nome_funcionario, fk_cargo },
            { 
                where: { id_funcionario: req.params.id }
            }
        );

        res.status(200).json({ message: "Funcionário atualizado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

module.exports = router;