const express = require('express');
const router = express.Router();

const Pagamento = require('../models/pagamento');

// GET – traz todos
router.get('/', async (req, res) => {
    const pagamentos = await Pagamento.findAll();
    res.json({ pagamentos });
});

// POST – criar
router.post('/', async (req, res) => {
    const { tipo_pagamento } = req.body;

    await Pagamento.create({ tipo_pagamento });

    res.json({ message: "Tipo de pagamento criado com sucesso!" });
});

// GET – por id
router.get('/:id', async (req, res) => {
    const pagamento = await Pagamento.findByPk(req.params.id);

    if (!pagamento) return res.status(404).json({ erro: "Pagamento não encontrado!" });

    res.json({ pagamento });
});

// PUT
router.put('/:id', async (req, res) => {
    const { tipo_pagamento } = req.body;

    await Pagamento.update(
        { tipo_pagamento },
        { where: { id_pagamento: req.params.id } }
    );

    res.json({ message: "Tipo de pagamento atualizado!" });
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Pagamento.destroy({ where: { id_pagamento: req.params.id } });

    res.json({ message: "Tipo de pagamento deletado!" });
});

module.exports = router;
