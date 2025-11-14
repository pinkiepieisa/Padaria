const express = require('express');
const router = express.Router();

//Importando os módulos
const Cargo = require('../models/tipo_cargo');


//Busca cargo (get)
router.get('/', async (req, res) => {
    try {
        const cargo = await Cargo.findAll();

        res.status(200).json({ cargo });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Cadastrar cargo
router.post('/', async (req, res) => {
    try {
        
        const { nome_cargo } = req.body;

        await Cargo.create({ nome_cargo });

        res.status(200).json({ message: "Cargo cadastrado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });
    }

});

//Buscar cargo por id (get)
router.get('/:id', async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);

        res.status(200).json({ cargo });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Deleta cargo por id
router.delete('/:id', async (req, res) => {
    try {

        await Cargo.destroy({
            where: { id_cargo: req.params.id  }
        });

        res.status(200).json({ message: "Cargo excluído com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Alterar cargo por id (put)
router.put('/:id', async (req, res) => {
    try {

        const { nome_cargo } = req.body;

        await Cargo.update(
            { nome_cargo },
            { 
                where: { id_cargo: req.params.id } 
            }
        );

        res.status(200).json({ message: "Cargo atualizado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });
    }

});

module.exports = router;