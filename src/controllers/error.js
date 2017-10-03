exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    message: 'What are you looking searching for?'
  });
};

exports.server = (req, res) => {
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    message: 'Sorry we are pretty ill right now. Hopefully we will get better soon'
  });
};
