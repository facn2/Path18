//schema
const mongoose = require('mongoose');
const Schema = mognoose.Schema;


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

const career = mongoose.model('career', careerSchema);

module.exports = career;
