const mongoose = require('mongoose');
const config = require('../config/database');

// Purchase Order Schema
const POSchema = mongoose.Schema({
  po_id: { type: String, default: null, required: true },
  // Required
  po_s_name: { type: String, default: null, required: true },
  po_t: { type: Number, default: null, required: true },
  po_client: { type: String, default: null, required: true },
  po_rcvr: { type: String, default: null, required: true },
  po_stat: { type: String, default: null, required: true },
  po_date: { type: Date, default: null, required: true },
  po_i_desc: { type: String, default: null, required: true },
  // Not Required
  po_d_rcvd: { type: Date, default: null },
  po_remarks: { type: String, default: null }
});

// For creating collections
const PO = module.exports = mongoose.model('Po', POSchema);

/* CRUD ACTIVITIES */
/* Create */
module.exports.addNewPurchaseOrder = function(newPO, callback) {
  newPO.save(callback);
}

/* Read */
module.exports.getAllPurchaseOrderRecords = function(callback) {
  PO.find(callback);
}

/* Update */
module.exports.findsObjectIDThatWillBeEdited = function(id, callback) {
  const query = {_id: id}
  PO.findById(query, callback);
}

/* Delete */
module.exports.deletePurchaseOrderRecord = function(id, callback) {
  const query = {_id: id}
  PO.deleteOne(query, callback);
}