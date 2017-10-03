const careers = require('./seed_data.js');
const mongoose = require('mongoose');

var dataLength = 0;
for (var i = 0; i < careers.length; i++) {
  careers[i].save((error, result) => {
    if (error) {
      console.log(error);
    } else {
      dataLength++;
      console.log('adding to db');
      if (dataLength === careers.length) {
        exit();
        console.log('done');
      } // no else
    }
  });
}
function exit () {
  mongoose.disconnect();
}
//
//
// db.once('open', () => {
//   console.log('we are connected to DB');
//   Career.collection.drop(); // once app is open, drop schema career
//
//   careers.forEach((career) => {
//     career.save((error, result) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(result);
//       console.log('add one schema to DB');
//     });
//   });
//   mongoose.disconnect();
// });
