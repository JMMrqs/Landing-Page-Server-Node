import Sequelize from 'sequelize';

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
