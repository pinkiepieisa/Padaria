const express = require('express');
const router = express.Router();

const VendaProduto = require('../models/venda_produto');
const Venda = require('../models/vendas');
const Produto = require('../models/produtos');

// GET – itens de todas vendas
router.get('/', async (req, res) => {
    const itens = await VendaProduto.findAll({
        include: [Venda, Produto]
    });

    res.json({ itens });
});

// POST – criar item da venda
router.post('/', async (req, res) => {
    const { fk_venda, fk_produto, quantidade, preco_unitario } = req.body;

    const venda = await Venda.findByPk(fk_venda);
    if (!venda) return res.status(400).json({ erro: "Essa venda não existe!" });

    const produto = await Produto.findByPk(fk_produto);
    if (!produto) return res.status(400).json({ erro: "Esse produto não existe!" });

    await VendaProduto.create({
        fk_venda,
        fk_produto,
        quantidade,
        preco_unitario
    });

    res.json({ message: "Item adicionado à venda!" });
});

// GET – item por id
router.get('/:id', async (req, res) => {
    const item = await VendaProduto.findByPk(req.params.id);

    if (!item) return res.status(404).json({ erro: "Item não encontrado!" });

    res.json({ item });
});

// PUT – atualizar item
router.put('/:id', async (req, res) => {
    const { quantidade, preco_unitario } = req.body;

    await VendaProduto.update(
        { quantidade, preco_unitario },
        { where: { id_vp: req.params.id } }
    );

    res.json({ message: "Item atualizado!" });
});

// DELETE
router.delete('/:id', async (req, res) => {
    await VendaProduto.destroy({
        where: { id_vp: req.params.id }
    });

    res.json({ message: "Item deletado!" });
});

module.exports = router;
