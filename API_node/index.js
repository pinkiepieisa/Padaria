const express = require('express');
const bodyParser = require('body-parser');

//cors: protocolo de comunicação entre apis e outros serviços
//O cors autoriza para qualquer tipo de serviço
const cors = require('cors');
const app = express();
const port = 8081;

//Importações
const cliente = require('./controllers/clienteControlls.js');
const funcionario = require('./controllers/funcionarioControlls.js');
const produto = require('./controllers/produtoControlls.js');
const venda = require('./controllers/vendaControlls.js');

//Rotas
app.use(bodyParser.json());

//Função CORS para a autorização do uso da API
app.use(cors());
app.get('/', (req, res) => res.send('Bem vindo à Padaria!'));
app.use('/cliente', cliente);
app.use('/funcionario', funcionario);
app.use('/produto', produto);
app.use('/venda', venda);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}!`));

