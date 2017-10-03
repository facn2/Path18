const Career = require('./career_model.js');

const careers = [
  new Career({
    title: 'Doctor',
    icon: 'doctor.svg',
    tagline: 'diagnoses and treats diseases',
    description: 'doctor saves life and buy food for peolpe and help pregnant woman. Vered is having difficulties because of the limit on sugar and flour. Paul will quit smoking and get back in shape soon.',
    grade_bagrut: 98.5,
    grade_psychometric: 790,
    starting_salary: 10000,
    senior_salary: 30000,
    degree: 'medicine',
    institution: 'University of Haifa, Hebrew University'
  }),
  new Career({
    title: 'Lawyer',
    icon: 'Lawyer.svg',
    tagline: 'Professional liar',
    description: 'King is a germ and Sajeda recently became another germ as well. Heather was partially germ and now she is healthy again.',
    grade_bagrut: 96.5,
    grade_psychometric: 770,
    starting_salary: 9000,
    senior_salary: 20000,
    degree: 'Law',
    institution: 'University of Tel Aviv, Hebrew University'
  })
];

module.exports = careers;
