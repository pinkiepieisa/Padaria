const express = require('express');
const router = express.Router();

//Importando módulo
const TipoProduto = require('../models/tipo_produto');

// Busca o tipo 
router.get('/', async (req, res) => {
    try {

        const tipos = await TipoProduto.findAll();
        res.status(200).json({ tipos });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Cadastra um novo tipo de produto
router.post('/', async (req, res) => {
    try {

        const { nome_tipo } = req.body;

        await TipoProduto.create({ nome_tipo });

        res.status(200).json({ message: "Tipo de produto cadastrado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

// Busca tipo do produto por id
router.get('/:id', async (req, res) => {
    try {

        const tipo = await TipoProduto.findByPk(req.params.id);

        if (!tipo) return res.status(404).json({ erro: "Tipo de produto não encontrado!" });

        res.status(200).json({ tipo });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

// Deleta pelo id
router.delete('/:id', async (req, res) => {
    try {

        await TipoProduto.destroy({ where: { id_tipo: req.params.id } });

        res.status(200).json({ message: "Tipo do produto excluído com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

// Altera o tipo pelo id
router.put('/:id', async (req, res) => {
    try {

        const { nome_tipo } = req.body;

        await TipoProduto.update(
            { nome_tipo },
            { where: { id_tipo: req.params.id } }
        );

        res.status(200).json({ message: "Tipo atualizado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });
        
    }
});

module.exports = router;
