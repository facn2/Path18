// const career = require('./../../database/career_model.js');
// module.exports = (req, res) => {
//   career.findById(req.params.id, (err, result) => {
//     if (err) {
//       console.log('Error with finding data ', err);
//     } else {
//       res.render('career', { career: result });
//     }
//   });
// };

module.exports = (req, res) => {
  res.render('career');
};
