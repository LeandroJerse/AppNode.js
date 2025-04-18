const { dbPassword } = require('./secrets');

module.exports = {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "escola",
    username: "postgres",
    password: dbPassword
};
