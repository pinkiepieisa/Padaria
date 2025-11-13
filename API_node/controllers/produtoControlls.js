const express = require('express');
const router = express.Router();

//Importando módulos
const Produtos = require('../models/produtos');
const Tipo_produto = require('../models/tipo_produto');

//Busca o produto pelo id (get)
router.get('/', async (req, res) => {
    const produtos = await Produtos.findAll();
    const tipo_produto = await Tipo_produto.findAll();

    res.status(200).json(produtos, tipo_produto);

});

//Cadastra o produto (post)
router.post('/', async (req, res) => {
    const { nome_produto } = req.body;
    const { fk_tipo_p } = req.body;
    const { unidade_medida } = req.body;
    const { preco_produto } = req.body;

    const newProduto = await Produtos.create({ nome_produto, fk_tipo_p, unidade_medida, preco_produto });

    const { nome_tipo } = req.body;

    const newTipoP = await Tipo_produto.create({ nome_tipo });

    res.status(200).json({ message: 'Cadastro do produto realizado com sucesso!'});

});

//Busca produto pelo id (get)
router.get('/:id', async (req, res) => {
    //const id = req.params;
    const produtos = await Produtos.findByPk(req.params.id);
    const tipo_produto = await Tipo_produto.findByPk(req.params.id);

    res.status(200).json(produtos, tipo_produto);

});

//Deletar produto por id (delete)
router.delete('/:id', async (req, res) => {
    await Produtos.destroy({
        where: { id_produtos: req.params.id },
    });

    await Tipo_produto.destroy({
        where: { id_tipo: req.params.id },
    });

    res.status(200).json({ message: "Produto excluído com sucesso!" });

});

//Alterar produto por id (put)
router.put('/:id', async (req, res) => {
    const { nome_produto } = req.body;
    const { fk_tipo_p } = req.body;
    const { unidade_medida } = req.body;
    const { preco_produto } = req.body;

    await Produtos.update(
        { nome_produto, fk_tipo_p, unidade_medida, preco_produto },
        {
            where: { id_produtos: req.params.id },
        }
    );

    const { nome_tipo } = req.body;

    await Tipo_produto.update(
        { nome_tipo },
        {
            where: { id_tipo: req.params.id },
        }
    );

    res.status(200).json({ message: 'Produto atualizado com sucesso!'});

});

module.exports = router;