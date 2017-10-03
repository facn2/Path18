const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerSchema = new Schema({
  title: String,
  icon: String,
  tagline: String,
  description: String,
  grade_bagrut: Number,
  grade_psychometric: Number,
  starting_salary: Number,
  senior_salary: Number,
  degree: String,
  institution: String
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
