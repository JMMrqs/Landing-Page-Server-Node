import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json()); //Configurar para aceitar/let dados json
app.use(cors()); // Middleware para controlar requisições ao servidor

app.get('/', (req, res) => {
    return res.json('Retorno dos Dados');
});

app.post('/', (req, res) => {
    return red.json('Retorno dos Dados(Post)');
});

app.get('/hi', (red, res) => {
    return res.json('Hello.');
});
app.get('/hi/:id', (req, res) => {
    const userId = req.params.id;
    return res.json(`Hello, ${userId}`);
});

app.listen('4000', () => {
    console.log('Servidor está funcionando...');
});
