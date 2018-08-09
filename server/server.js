const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const path = require('path') // w/ express static only
// IMPORT ALL PACKAGES

const app = express();
const port = process.env.SERVER_PORT;
const ac = require('./controllers/authCtrl');
const pc = require('./controllers/postsCtrl');
// DEFINE CONSTS


massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('We is hooked up to the database broniez!');
})
// MASSIVE CONNECTS TO DB

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))
app.use(express.static(`${__dirname}/../build`))     // this is only for production
// DEFINE MIDDLEWARE

app.get(`/auth/callback`, ac.auth);
app.get(`/api/currentUser`, (req, res) => {
  res.send(req.session.user)
});
app.get(`/api/logout`, (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
})
app.get(`/api/posts`, pc.read);
app.post(`/api/posts`, pc.create);
// DEFINE ENDPTS


// app.get('/*', function(req, res) { // ******This is only used w/ express static
//   res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.listen(port, () => {
  console.log('We are live boys and girls! Port =======> ', port);
})
// LISTEN ON DEFINED PORT => RUN NODE/NODEMON TO SERVE UP FROM BACKEND