const mongoose = require('mongoose');
const config = require('../config/database');

/* Schemas */
// User Schema
const UserSchema = mongoose.Schema({
  // Required
  user_lname: { type: String, required: true },
  user_fname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },

  // Not Required
  user_mname: { type: String }
});

/* Collections */
const User = module.exports = mongoose.model('User', UserSchema);

/* CRUD ACTIVITIES */
// Create
module.exports.addNewUser = function(newUser, callback) {
  newUser.save(callback);
}

// Read
module.exports.getAllUser = function(callback){
  User.find(callback);
}

module.exports.getUserByUsername = function(un, callback){
  const query = {username: un}
  User.findOne(query, callback);
}

/* Update */
module.exports.findsObjectIDThatWillBeEdited = function(id, callback) {
  const query = {_id: id}
  User.findById(query, callback);
}

// Delete
module.exports.deleteUser = function(id, callback) {
  const query = {_id: id}
  User.deleteOne(query, callback);
}
