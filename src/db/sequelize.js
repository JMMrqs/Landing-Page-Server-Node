import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida com o banco de dados.');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
})();

// Define a model
export const User = sequelize.define('User', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Sync the model with the database
try {
    await sequelize.sync();
    const john = await User.create({
        firstName: 'John',
        lastName: 'Doe',
    });
    console.log(john.toJSON());
} catch (err) {
    console.error('Unable to connect to the database:', err);
}
