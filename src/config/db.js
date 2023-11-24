const { Client } = require('pg');

const dbConfig = {
  user: 'fl0user',
  host: 'ep-falling-firefly-90169690.ap-southeast-1.aws.neon.fl0.io',
  database: 'database',
  password: 'qdHPK9i7rcfe',
  port: 5432,
}

const client = new Client(dbConfig);

client.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Puedes realizar operaciones en la base de datos aquí
  })
  .catch(err => console.error('Error de conexión a la base de datos', err))
  .finally(() => {
    // Cerrar la conexión después de realizar operaciones
    client.end();
  });
