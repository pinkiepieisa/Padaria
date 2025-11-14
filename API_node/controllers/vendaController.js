const express = require('express');
const router = express.Router();

const Vendas = require('../models/vendas');
const Pagamento = require('../models/pagamento');
const Funcionario = require('../models/funcionarios');
const Cliente = require('../models/clientes');

// GET – todas as vendas
router.get('/', async (req, res) => {
    const vendas = await Vendas.findAll({
        include: [Pagamento, Funcionario, Cliente]
    });

    res.json({ vendas });
});

// POST – criar venda
router.post('/', async (req, res) => {
    const { data_hora, fk_cliente, fk_funcionario, fk_pagamento } = req.body;

    // validações
    const pg = await Pagamento.findByPk(fk_pagamento);
    if (!pg) return res.status(400).json({ erro: "Pagamento inválido!" });

    const cli = await Clientes.findByPk(fk_cliente);
    if (!cli) return res.status(400).json({ erro: "Cliente inválido!" });

    const func = await Funcionarios.findByPk(fk_funcionario);
    if (!func) return res.status(400).json({ erro: "Funcionário inválido!" });

    // cria nova venda
    const venda = await Vendas.create({
        data_hora,
        fk_cliente,
        fk_funcionario,
        fk_pagamento
    });

    res.json({ message: "Venda criada com sucesso!", venda });
});

// GET – por ID
router.get('/:id', async (req, res) => {
    const venda = await Vendas.findByPk(req.params.id, {
        include: [Pagamento, Funcionario, Cliente]
    });

    if (!venda) return res.status(404).json({ erro: "Venda não encontrada!" });

    res.json({ venda });
});

// PUT – atualizar venda
router.put('/:id', async (req, res) => {
    const { data_hora, fk_cliente, fk_funcionario, fk_pagamento } = req.body;

    await Vendas.update(
        { data_hora, fk_cliente, fk_funcionario, fk_pagamento },
        { where: { id_vendas: req.params.id } }
    );

    res.json({ message: "Venda atualizada com sucesso!" });
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Vendas.destroy({ where: { id_vendas: req.params.id } });

    res.json({ message: "Venda deletada!" });
});

module.exports = router;
