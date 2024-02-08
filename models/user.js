import { Sequelize } from 'sequelize';
import { sequelize } from '../src/db/sequelize.js';

export const User = sequelize.define('User', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
    },
});

// Mock user insertion
// try {
//     await sequelize.sync();
//     const john = await User.create({
//         firstName: 'John',
//         lastName: 'Doe',
//     });
//     console.log(john.toJSON());
// } catch (err) {
//     console.error('Unable to connect to the database:', err);
// }
