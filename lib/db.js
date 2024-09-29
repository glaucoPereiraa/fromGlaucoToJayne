const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'nome_do_banco',
  process.env.DB_USER || 'seu_usuario',
  process.env.DB_PASSWORD || 'sua_senha',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));

const db = {
  sequelize,
};

module.exports = db;
