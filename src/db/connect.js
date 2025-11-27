require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = pool

/*

    Aprendizadps:
O pool serve para nao travar o banco ou deixá=lo lento, no caso 
de várias requisições, o pool (piscina) aguenta várias requisições 
ao mesmo tempo (neste caso 10), assim deixando-o mais rápido e seguro

*/