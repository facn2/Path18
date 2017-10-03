const career = require('./career_model.js');
const db = require('./db_connection.js');
const careers = require('./seed_data.js');
const mongoose = require('mongoose');

db.once('open', () => {
  console.log('we are connected to DB');
  career.collection.drop(); // once app is open, drop schema career

  let dataLength = 0;
  for (let i = 0; i < careers.length; i++) {
    careers[i].save((error, result) => {
      if (error) {
        console.log(error);
      } else {
        dataLength++;
        if (dataLength === careers.length) {
          exit();
        } // no else
      }
    });
  }

  function exit () {
    mongoose.disconnect();
  }
});
