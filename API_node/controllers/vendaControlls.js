const express = require('express');
const router = express.Router();

//Importando os módulos
const Vendas = require('../models/vendas');
const Pagamento = require('../models/pagamento');
const Venda_produto = require('../models/venda_produto');

//Busca a venda (get)
router.get('/', async (req, res) => {
    const vendas = await Vendas.findAll();
    const pagamento = await Pagamento.findAll();
    const venda_produto = await Venda_produto.findAll();

    res.status(200).json(vendas, pagamento, venda_produto);

});

//Cadastra veiculo (post)
router.post('/', async (req, res) => {
    const { data_hora } = req.body;
    const { fk_funcionario } = req.body;
    const { fk_cliente } = req.body;
    const { fk_pagamento } = req.body;

    const newVenda = await Vendas.create({ data_hora, fk_funcionario, fk_cliente, fk_pagamento });

    const { tipo_pagamento } = req.body;

    const newPagamento = await Pagamento.create({ tipo_pagamento });

    const { fk_venda } = req.body;
    const { fk_produto } = req.body;
    const { quantidade } = req.body;
    const { preco_unitario } = req.body;

    const newVendaPro = await Venda_produto.create({ fk_venda, fk_produto, quantidade, preco_unitario });

    res.status(200).json({ message: 'Cadastro da venda realizado com sucesso!' });

});

//Busca da venda por id (get)
router.get('/:id', async (req, res) => {
    //const id = req.params;
    const vendas = await Vendas.findByPk(req.params.id);
    const pagamento = await Pagamento.findByPk(req.params.id);
    const venda_produto = await Venda_produto.findByPk(req.params.id);

    res.status(200).json(vendas, pagamento, venda_produto);

});

//Deleta a venda por id (put)
router.delete('/:id', async (req, res) => {
    await Vendas.destroy({
        where: { id_vendas: req.params.id },
    });

    await Pagamento.destroy({
        where: { id_pagamento: req.params.id },
    });

    await Venda_produto.destroy({
        where: { id_vp: req.params.id },
    });

    res.status(200).json({ message: 'Venda excluída com sucesso!' });

});

//Alterar venda por id (put)
router.put('/:id', async (req, res) => {
    const { data_hora } = req.body;
    const { fk_funcionario } = req.body;
    const { fk_cliente } = req.body;
    const { fk_pagamento } = req.body;

    await Vendas.update(
        { data_hora, fk_funcionario, fk_cliente, fk_pagamento },
        {
            where: { id_vendas: req.params.id },
        }
    );

    const { tipo_pagamento } = req.body;

    await Pagamento.update(
        { tipo_pagamento },
        {
            where: { id_pagamento: req.params.id },
        }
    );

    const { fk_venda } = req.body;
    const { fk_produto } = req.body;
    const { quantidade } = req.body;
    const { preco_unitario } = req.body;

    await Venda_produto.update(
        { fk_venda, fk_produto, quantidade, preco_unitario },
        {
            where: { id_vp: req.params.id },
        }
    );

    res.status(200).json({ message: 'Venda atualizada com sucesso! '});

});

module.exports = router;
