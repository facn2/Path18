const Career = require('./../../database/career_model.js');

module.exports = (req, res) => {
  Career.find({}, (error, result) => {
    if (error) {
      console.log('Error with rendering data', error);
    } else {
      res.render('career', { career: result });
      console.log('this is the result:', result);
      console.log();
    }
  });
};
