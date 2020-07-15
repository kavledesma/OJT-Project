const mongoose = require('mongoose');
const config = require('../config/database');

// Employee Schema
const EmpSchema = mongoose.Schema({
  emp_id: { type: String, default: null },
  // Required
  emp_lname: { type: String, default: null, required: true },
  emp_fname: { type: String, default: null, required: true },
  emp_hdate: { type: Date, default: null, required: true },
  emp_jtitle: { type: String, default: null, required: true },
  emp_dept: { type: String, default: null, required: true },
  emp_stat: { type: String, default: null, required: true },
  // Not Required
  emp_mname: { type: String, default: null },
  emp_fprint: { type: String, default: null},
  emp_skype: { type: String, default: null},
  emp_domlog: { type: String, default: null},
  emp_badge: { type: String, default: null},
  emp_sfx: { type: String, default: null},
  emp_name: String,
});

// For creating collections
const Emp = module.exports = mongoose.model('Emp', EmpSchema);

/* CRUD ACTIVITIES */
/* Create */
module.exports.addNewEmployeeRecord = function(newEmp, callback){
  newEmp.save(callback);
}

/* Read */
module.exports.getAllEmployeeRecord = function(callback){
  Emp.find(callback);
}

/* Update */
module.exports.findsObjectIDThatWillBeEdited = function(id, callback) {
  const query = {_id: id}
  Emp.findById(query, callback);
}

/* Delete */
module.exports.deleteEmployeeRecord = function(id, callback) {
  const query = {_id: id}
  Emp.deleteOne(query, callback);
}
