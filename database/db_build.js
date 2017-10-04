const careers = require('./seed_data.js');
// const mongoose = require('mongoose');
const db = require('./db_connection.js');
const Career = require('./career_model.js');
db.once('open', () => {
  Career.insertMany(careers);
  console.log('buidling db');
  console.log('done');
  db.close();
});
