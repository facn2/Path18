const Career = require('./../../database/career_model.js');

module.exports = (req, res) => {
  Career.find({}, (error, result) => {
    if (error) {
      return res.render('error', {
        statusCode: 503,
        message: 'Sorry cannot find anything in the database',
        type: 'error'
      });
    } else {
      res.render('career', { career: result });
    }
  });
};
