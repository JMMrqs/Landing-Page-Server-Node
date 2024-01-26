import express from 'express';
import cors from 'cors';
import { aboutData } from './data/about.js';
import { skillsData } from './data/skills.js';

const app = express();

app.use(express.json()); //Configurar para aceitar/let dados json
app.use(cors()); // Middleware para controlar requisições ao servidor

app.get('/', (_, res) => {
    return res.json('Retorno dos Dados');
});

app.use('/static/', express.static('media/'));

app.get('/api/about/', (_, res) => res.json(aboutData));

app.get('/api/skills/', (_, res) => res.json(skillsData));

app.listen('4000', () => {
    console.log('Servidor está funcionando...');
});
