const { Pool } = require('pg');

const env = process.env.NODE_ENV || 'development';
const config = require('../src/database/config/config.json')[env];

console.log(`Creating Database ${config.database}`);
const connectionString = `postgres://${config.username}:${config.password}@${config.host}/postgres`;

try {
    const client = new Pool({ connectionString });
    const query = `CREATE DATABASE ${config.database}`;
    client.query(query, () => {
        console.log(`Database ${config.database} created`);
        client.end();
    });
} catch (err) {
    throw new Error(`Unable to create Database ${config.database}: ${err}`);
}
