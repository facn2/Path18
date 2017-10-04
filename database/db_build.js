const careers = require('./seed_data.js');
const connection = require('./db_connection');
const Career = require('./career_model');

connection.once('open', () => {
  connection.db.dropCollection('careers', (err, res) => {
    if (err) console.log('This is the error:', err);
    Career.insertMany(careers, (err) => {
      if (err) console.log(err);
      connection.close();
    });
  });
});
