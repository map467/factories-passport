const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mitul:factories1@ds219191.mlab.com:19191/heroku_cm401lvd', (err) => {
  if (!err)
    console.log('MongoDB connection successful.');
  else
    console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
