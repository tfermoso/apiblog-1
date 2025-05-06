const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Único string completo
  ssl: {
    rejectUnauthorized: false, // necesario para Render
  },
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error al conectar a la base de datos PostgreSQL:', err.stack);
    process.exit(1);
  }
  console.log('Conexión a PostgreSQL establecida');
  release(); // libera el cliente al pool
});

module.exports = pool;
