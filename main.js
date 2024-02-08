import express from 'express';
import cors from 'cors';
import { aboutData } from './data/about.js';
import { skillsData } from './data/skills.js';
import { portfolioData } from './data/portfolio.js';
import { bannerText } from './data/banner.js';
import { servicesData } from './data/services.js';
import { contactData } from './data/contact.js';
import { listUserController } from './controllers/listUserController.js';
import { deleteUserController } from './controllers/deleteUserController.js';
import { insertContactController } from './controllers/insertContactController.js';

const app = express();

app.use(express.json()); //Configurar para aceitar/ler dados json
app.use(cors()); // Middleware para controlar requisições ao servidor

app.get('/', listUserController);

app.use('/static/', express.static('media/'));

app.get('/api/about/', (_, res) => res.json(aboutData));

app.get('/api/skills/', (_, res) => res.json(skillsData));

app.get('/api/portfolio/', (_, res) => res.json(portfolioData));

app.get('/api/banner/', (_, res) => res.json(bannerText));

app.get('/api/services/', (_, res) => res.json(servicesData));

app.get('/api/contact/', (_, res) => res.json(contactData));

app.post('/api/contact/', insertContactController);

app.listen('4000', () => {
    console.log('Servidor está funcionando...');
});

// Get users
app.get('/users', listUserController);

// Delete user
app.delete('/users/:id', deleteUserController);
