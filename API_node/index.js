const express = require('express');
const bodyParser = require('body-parser');

//cors: protocolo de comunicação entre apis e outros serviços
//O cors autoriza para qualquer tipo de serviço
const cors = require('cors');
const app = express();
const port = 8081;

//Importações
const cliente = require('./controllers/clienteController.js');
const funcionario = require('./controllers/funcionarioController.js');
const cargo = require('./controllers/cargoController.js');
const tipoProduto = require('./controllers/tipoProdutoController.js');
const produto = require('./controllers/produtoController.js');
const pagamento = require('./controllers/pagamentoController.js');
const venda = require('./controllers/vendaController.js');
const vendaProduto = require('./controllers/vendaProdutoController.js');

//Rotas
app.use(bodyParser.json());

//Função CORS para a autorização do uso da API
app.use(cors());
app.get('/', (req, res) => res.send('Bem vindo à Padaria!'));

app.use('/cliente', cliente);
app.use('/funcionario', funcionario);
app.use('/cargo', cargo);
app.use('/tipo-produto', tipoProduto);
app.use('/produto', produto);
app.use('/pagamento', pagamento);
app.use('/venda', venda);
app.use('/venda-produto', vendaProduto);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}!`));

