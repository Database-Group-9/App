// const env = process.env;
const dotenv = require('dotenv');
dotenv.config();
const env = process.env;

const config = {
    db: {
        host: env.DB_HOST, 
        port: env.DB_PORT, 
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE
    },
    listPerPage: 20
};

module.exports = config;