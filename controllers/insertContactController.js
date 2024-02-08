import { Contact } from '../models/contact.js';

export async function insertContactController(req, res) {
    const contactInfo = req.body;
    const contact = await Contact.create(contactInfo);

    if (!contact) {
        return res.status(500).json({ message: 'Falha ao salvar a mensagem!' });
    }

    return res.json({ message: 'Mensagem recebida com sucesso!' });
}
