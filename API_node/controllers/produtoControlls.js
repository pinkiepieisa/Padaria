const express = require('express');
const router = express.Router();

//Importando módulos
const Produtos = require('../models/produtos');
const Tipo_produto = require('../models/tipo_produto');

//Busca o produto pelo id (get)
router.get('/', async (req, res) => {
    try {

        const produtos = await Produtos.findAll({ include: { model: Tipo_produto }});

        res.status(200).json({ produtos });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }
});

//Cadastra o produto (post)
router.post('/', async (req, res) => {
    try {
        const { nome_produto, fk_tipo_p, unidade_medida, preco_produto } = req.body;

        // Verifica se o tipo existe
        const tipoExiste = await Tipo_produto.findByPk(fk_tipo_p);
        if (!tipoExiste) {
            return res.status(400).json({
                erro: `O tipo de produto com ID ${fk_tipo_p} não existe.`
            });
        }

        await Produtos.create({ nome_produto, fk_tipo_p, unidade_medida, preco_produto });

        res.status(200).json({ message: "Produto cadastrado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Busca produto pelo id (get)
router.get('/:id', async (req, res) => {
    try {

        const produto = await Produtos.findByPk(req.params.id, { include: { model: Tipo_produto }});

        if (!produto) return res.status(404).json({ erro: "Produto não encontrado!" });

        res.status(200).json({ produto });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Deletar produto por id (delete)
router.delete('/:id', async (req, res) => {
    try {

        await Produtos.destroy({
            where: { id_produto: req.params.id }
        });

        res.status(200).json({ message: "Produto excluído com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

//Alterar produto por id (put)
router.put('/:id', async (req, res) => {

    try {

        const { nome_produto, fk_tipo_p, unidade_medida, preco_produto } = req.body;

        const tipoExiste = await TipoProduto.findByPk(fk_tipo_p);

        if (!tipoExiste) {

            return res.status(400).json({
                erro: "O tipo informado não existe!"
            });
        }

        await Produtos.update(
            { nome_produto, fk_tipo_p, unidade_medida, preco_produto },
            { where: { id_produto: req.params.id } }
        );

        res.status(200).json({ message: "Produto atualizado com sucesso!" });

    } catch (error) {

        res.status(500).json({ erro: error.message });

    }

});

module.exports = router;