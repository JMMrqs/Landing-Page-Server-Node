import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db/sequelize.js';

export const User = sequelize.define('Otheruser', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
    },
});
