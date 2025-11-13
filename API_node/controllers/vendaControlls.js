const express = require('express');
const router = express.Router();

//Importando os módulos
const Vendas = require('../models/vendas');
const Pagamento = require('../models/pagamento');
const Venda_produto = require('../models/venda_produto');

//Busca a venda por id
router.get('/', async (req, res) => {
    const vendas = await Vendas.findAll();
    const pagamento = await Pagamento.findAll();
    const venda_produto = await Venda_produto.findAll();

    res.status(200).json(vendas)
})
