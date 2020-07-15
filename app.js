const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');

const app = express();

// Port Number
const port = 80;

/* Database Config */
// Database Connection
mongoose.connect(config.database, {useNewUrlParser: true});

// Database Connection Message
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+ err);
});

/* Middlewares */
// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

/* Routes */
// Folder Routes
const users = require('./routes/users');
const pos = require('./routes/pos');
const accs = require('./routes/accs');
const emps = require('./routes/emps');

// http://<url name>/...
app.use('/users', users);
app.use('/pos', pos);
app.use('/emps', emps);
app.use('/accs', accs);

/* Essentials */
// Go to 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Redirect to 'public/index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Index Route
app.get('/', (req, res) => {
  res.send('Disconnected to the front-end!');
});

// Start Server
app.listen(port, () => {
  console.log('Server listening to port '+ port);
});

