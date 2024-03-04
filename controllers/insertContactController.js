// import { Contact } from '../models/contact.js';
//
// export async function insertContactController(req, res) {
//     const contactInfo = req.body;
//     const contact = await Contact.create(contactInfo);
//
//     if (!contact) {
//         return res.status(500).json({ message: 'Falha ao salvar a mensagem!' });
//     }
//
//     return res.json({ message: 'Mensagem recebida com sucesso!' });
// }
import { connection } from '../src/db/mysql-connect.js';
export async function insertContactController(req, res) {
    const contactInfo = req.body;
    connection.query(
        'INSERT INTO contacts(name, email, phone, subject, text) VALUES(?, ?, ?, ?, ?)',
        [
            contactInfo.name,
            contactInfo.email,
            contactInfo.phone,
            contactInfo.subject,
            contactInfo.text,
        ],
    );
    return res.json({
        message: 'DB query started, but no current verifier for successful operation.',
    });
}
