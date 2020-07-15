const mongoose = require('mongoose');
const config = require('../config/database');

// Accountability Schema
const AccSchema = mongoose.Schema({
  Acc_ID: { type: String, default: null },
  // Info about the person who will use 
  // Required
  acc_rcvr_lname: { type: String, default: null, required: true },
  acc_rcvr_fname: { type: String, default: null, required: true },
  acc_rcvr_dept: { type: String, default: null, required: true },
  // Not Required
  acc_rcvr_mname: { type: String, default: null },
  acc_rcvr_cn: { type: String, default: null },
  acc_rcvr_loc: { type: String, default: null},
  // Info about item borrowed
  // Required
  acc_i_name: { type: String, default: null, required: true },
  acc_i_clss: { type: String, default: null, required: true },
  acc_i_count: { type: Number, default: null, required: true },
  acc_i_tnum: { type: String, default: null, required: true },
  acc_i_ser: { type: String, default: null, required: true },
  acc_date_i: { type: Date, default: null, required: true },
  Acc_PO_SupplierName: { type: String, default: null, required: true },
  // Not Required
  acc_date_r: { type: Date, default: null },
  acc_i_remarks: { type: String, default: null },
  Acc_PO_ID: { type: String, default: null },
  Acc_InvoiceNumber: { type: String, default: null }
});

// For creating collections
const Acc = module.exports = mongoose.model('Acc', AccSchema);

/* CRUD ACTIVITIES */
/* Create */
module.exports.addNewAccountabilityRecord = function(newAcc, callback){
  newAcc.save(callback);
}

/* Read */
module.exports.getAllAccountabilityRecords = function(callback){
  Acc.find(callback);
}

/* Update */
module.exports.findsObjectIDThatWillBeEdited = function(id, callback) {
  const query = {_id: id}
  Acc.findById(query, callback);
}

/* Delete */
module.exports.deleteAccountabilityRecord = function(id, callback){
  const query = {_id: id}
  Acc.deleteOne(query, callback);
}