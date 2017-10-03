const career = require('./career_model.js');
const db = require('./db_connection.js');
const careers = require('./seed_data.js');
// const mongoose = require('mongoose');

db.once('open', () => {
  console.log('we are connected to DB');
  career.collection.drop(); // once app is open, drop schema career

  careers.forEach((career) => {
    career.save((error, result) => {
      if (error) {
        // render error hbs
        return console.log(error);
      }
    });
  });
});

// not sure if we need this
// function exit () {
//   mongoose.disconnect();
// }
