const app = require('./app');
const db = require('./../database/db_connection.js');

db.once('open', function () {
  console.log('connected to DB');
  app.listen(app.get('port'), () => {
    console.log(`App running on port ${app.get('port')}`);
  });
});
