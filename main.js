import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { aboutData } from './data/about.js';
import { skillsData } from './data/skills.js';
import { portfolioData } from './data/portfolio.js';
import { bannerText } from './data/banner.js';
import { servicesData } from './data/services.js';
import { contactData } from './data/contact.js';
import { connection } from './src/db/mysql-connect.js';
import { insertContactController } from './controllers/insertContactController.js';

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json()); //Configurar para aceitar/ler dados json

app.use('/static/', express.static('media/'));

app.get('/api/about/', (_, res) => res.json(aboutData));

app.get('/api/skills/', (_, res) => res.json(skillsData));

app.get('/api/portfolio/', (_, res) => res.json(portfolioData));

app.get('/api/banner/', (_, res) => res.json(bannerText));

app.get('/api/services/', (_, res) => res.json(servicesData));

app.get('/api/contact/', (_, res) => res.json(contactData));

app.listen('4000', () => {
    console.log('Servidor está funcionando...');
});

const [testQuery] = await connection.query('SELECT * FROM programming_languages;');
console.log(testQuery);

app.get('/', async (_, res) => {
    const [query] = await connection.query('SELECT * FROM contacts;');
    return res.status(200).json(query);
});

app.post('/api/contact/', insertContactController); // Call function for post handling
