const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

/* Account Stuff */
// Register
router.post('/add/new', (req, res, next) => {
  let newUser = new User({
    user_lname: req.body.user_lname,
    user_fname: req.body.user_fname,
    user_mname: req.body.user_mname,
    username: req.body.username,
    password: req.body.password
  });

  const usernameEntered = req.body.username;

  // Searches the database for a record with the entered username in it // Saves the result in variable 'result'
  User.getUserByUsername(usernameEntered, (err, result) => {
    // Displays error if there's one
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    // Displays error msg if there's a match
    if (result) {
      return res.send({success: false, msg: 'The username you\'ve entered is either blank or already taken.'});
    }

    // Saves if all is good
    User.addNewUser(newUser, (err) => {
      if(err) {
        res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
      } else {
        res.send({success: true, msg:'Saved!'});
      }
    });
  });
});

// Authenticate 
router.post('/auth', (req, res, next) => {
  const usernameEntered = req.body.username;
  const passwordEntered = req.body.password;

  // Searches the database for a record with the entered username in it // Saves the result in variable 'result'
  User.getUserByUsername(usernameEntered, (err, result) => {
    // Displays error if there's one
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    // Displays error msg if there's a match or username textbox is empty
    if (!result || !usernameEntered) {
      return res.send({success: false, msg: 'The username you\'ve entered is either wrong or doesn\'t exist.'});
    }

    // Displays error msg if the entered password doesn't match to the appropriate username record or password textbox is empty
    if ((!(result.password == passwordEntered)) || (!passwordEntered)) {
      return res.send({success: false, msg: 'Wrong password.'});
    }

    // the JWT token // Sets the duration of each session
    const token = jwt.sign({data: result}, config.secret, { expiresIn: 1800 /* 30 mins in seconds */ });

    // If all is good, send the user data
    res.send({
      success: true, 
      token: 'JWT '+ token,
      userinfo: {
      _id: result._id,
      user_lname: result.user_lname,
      user_fname: result.user_fname,
      user_mname: result.user_mname,
      username: result.username
      }
    });

  });
});

/* CRUD Activities */
/* Read */

router.get('/rd/all', (req, res, next) => {
  User.getAllUser((err, result) => {
    if (err) {
      res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    } else {
      res.send(result);
    }
  });
});

/* Update */
router.put('/upd/:id', (req, res, next) => {
  const id = req.params.id;

  User.findsObjectIDThatWillBeEdited(id, (err, result) => {
    if (err) {
      res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    if (!result) {
      res.send({success: false, msg: 'User not found.'});
    } else {
      result.user_lname = req.body.user_lname,
      result.user_fname = req.body.user_fname,
      result.user_mname = req.body.user_mname,
      result.username = req.body.username,
      result.password = req.body.password,

      result.save((err) => {
        if (err) {
          res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err}); 
        } else {
          res.send({success: true, msg: 'Saved!'});
        }
      });
    }
  });
});

/* Delete */
router.delete('/del/:id', (req, res, next) => {
  const id = req.params.id;

  User.deleteUser(id, (err, result) => {
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    if (result.deletedCount == 0 || !result) {
      res.send({success: false, msg: "User not found."});
    } else {
      res.send({success: true, msg: 'User deleted!'});
    }
  });
});

module.exports = router;
