import { Sequelize } from 'sequelize';
import { sequelize } from '../src/db/sequelize.js';

export const Contact = sequelize.define('Contact', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telephone: {
        type: Sequelize.STRING(16),
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING(1234),
        allowNull: false,
    },
});

Contact.sync();
