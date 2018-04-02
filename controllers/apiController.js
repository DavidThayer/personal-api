function index(req, res) {
  res.json({
    message: 'Welcome to April Fools 2018!',
    documentation_url: '',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

// controllers/apiController.js
module.exports = {
  index: index
}
