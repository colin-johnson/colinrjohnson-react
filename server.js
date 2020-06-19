require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const bodyParser = require('body-parser');
const app = express();
// global.__basedir = __dirname;
// Mongo DB
// require('./models/User');
// require('./services/authentication');
// require('./services/emailAuthentication');

// mongoose.connect(`${process.env.MONGO_DB}`, { useNewUrlParser: true, useFindAndModify: false });

app.set('port', process.env.PORT || 5000);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [process.env.COOKIE_KEY],
//   }),
// );
// app.use(passport.initialize());
// app.use(passport.session());

// // routes
// require('./routes/account')(app);
// require('./routes/zillow')(app);
// require('./routes/estate')(app);
// require('./routes/analysis')(app);
// require('./routes/stripe')(app);
// require('./routes/criteria')(app);
// require('./routes/support')(app);
// require('./routes/google')(app);
// require('./routes/cloudinary')(app);
// require('./routes/pdf')(app);
// require('./routes/mls')(app);
// require('./routes/quantarium')(app);

if (process.env.NODE_ENV === 'production') {
  const root = require('path').join(__dirname, 'app', 'build');

  app.use(express.static(root));
  app.get('*', function (req, res) {
    res.sendFile('index.html', { root });
  });
}

app.listen(app.get('port'), () => {
  console.log(app.get('port'));
  console.log(__dirname);
  console.log(__dirname);
  console.log(path.join(__dirname, '/app/build', 'index.html'));
  console.log(`Find the server at: /${app.get('port')}/`);
});
