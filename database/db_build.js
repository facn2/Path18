const careers = require('./seed_data.js');
const mongoose = require('mongoose');
const db = require('./db_connection.js');
const Career = require('./career_model.js');

function exit () {
  mongoose.disconnect();
}

db.once('open', () => {
  Career.insertMany(careers);
  console.log('buidling db');
  exit();
  console.log('done');
});
