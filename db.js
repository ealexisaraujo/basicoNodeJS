const db = require('mongoose');
const { config } = require('./config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
db.Promise = global.Promise;

async function connect() {
  await db.connect(
    `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'telegram'
    }
  );

  console.log('[db] conectada con exito');
}

module.exports = connect;
