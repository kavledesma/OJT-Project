const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Acc = require('../models/acc');

/* CRUD Activities */
/* Create */
// Create new Accountability
router.post('/add/new', (req, res, next) => {
  let newAcc = new Acc ({
    Acc_ID: req.body.Acc_ID,
    acc_rcvr_lname: req.body.acc_rcvr_lname,
    acc_rcvr_fname: req.body.acc_rcvr_fname,
    acc_rcvr_mname: req.body.acc_rcvr_mname,
    acc_rcvr_cn: req.body.acc_rcvr_cn,
    acc_rcvr_dept: req.body.acc_rcvr_dept,
    acc_rcvr_loc: req.body.acc_rcvr_loc,
    acc_date_i: req.body.acc_date_i,
    acc_date_r: req.body.acc_date_r,
    acc_i_name: req.body.acc_i_name,
    acc_i_count: req.body.acc_i_count,
    acc_i_tnum: req.body.acc_i_tnum,
    acc_i_ser: req.body.acc_i_ser,
    acc_i_clss: req.body.acc_i_clss,
    acc_i_remarks: req.body.acc_i_remarks,
    acc_i_prps: req.body.acc_i_remarks,
    Acc_PO_ID: req.body.Acc_PO_ID,
    Acc_PO_SupplierName: req.body.Acc_PO_SupplierName,
    Acc_InvoiceNumber: req.body.Acc_InvoiceNumber
  });

  // Searches for entry with the same serial number entered // Save entry to variable 'result_ser'
  Acc.findOne({acc_i_ser: req.body.acc_i_ser}, (err, result_ser) => {
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    // Searches for entry with the same tag number entered // Save entry to variable 'result_tnum'
    Acc.findOne({acc_i_tnum: req.body.acc_i_tnum}, (err, result_tnum) => {
      if (err) {
        return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
      }

      // Type "n/a" tag number or serial number or both are unavailable
      if (req.body.acc_i_tnum == "n/a" && req.body.acc_i_ser == "n/a") {
        Acc.addNewAccountabilityRecord(newAcc, (err, acc) => {
          if (err) {
            res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
          } else {
            res.send({success: true, msg: 'Saved!'});
          }
        });
      }

      // Tag Number is taken
      else if ((!result_ser && result_tnum) || (result_tnum && req.body.acc_i_ser == "n/a")) {
        return res.send({success: false, msg: 'The tag number you\'ve entered is already taken. Please change it.'});
      } 

      // Serial Number is taken
      else if ((result_ser && !result_tnum) || (result_ser && req.body.acc_i_tnum == "n/a")) {
        return res.send({success: false, msg: 'The serial number you\'ve entered is already taken. Please change it.'});
      } 

      // Both are taken
      else if (result_ser != null && result_tnum != null) {
        return res.send({success: false, msg: 'Both tag number and serial number you\'ve entered are already taken. Please change it.'});
      } 

      // Save if all is good
      else {        
        Acc.addNewAccountabilityRecord(newAcc, (err, acc) => {
          if (err) {
            res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
          } else {
            res.send({success: true, msg: 'Saved!'});
          } 
        });
      }
    });
  });
});

/* Read */
router.get('/rd/all', (req, res, next) => {
  Acc.getAllAccountabilityRecords((err, result) => {
    if(err) {
      res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    } else {
      res.send(result);
    }
  });
});

/* Update */
router.put('/upd/:id', (req, res, next) => {
  const id = req.params.id;

  // Search entry by ObjectID // Save entry to variable 'result'
  Acc.findsObjectIDThatWillBeEdited(id, (err, result) => {
    // Display error if there's one
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    // Checks if entry have a match
    if (!result) {
      res.send({success: false, msg: 'Accountability record not found.'});
    } else {
      result.Acc_ID = req.body.Acc_ID,
      result.acc_rcvr_lname = req.body.acc_rcvr_lname,
      result.acc_rcvr_fname = req.body.acc_rcvr_fname,
      result.acc_rcvr_mname = req.body.acc_rcvr_mname,
      result.acc_rcvr_cn = req.body.acc_rcvr_cn,
      result.acc_rcvr_dept = req.body.acc_rcvr_dept,
      result.acc_rcvr_loc = req.body.acc_rcvr_loc,
      result.acc_date_r = req.body.acc_date_i,
      result.acc_date_r = req.body.acc_date_r,
      result.acc_i_name = req.body.acc_i_name,
      result.acc_i_count = req.body.acc_i_count,
      result.acc_i_tnum = req.body.acc_i_tnum,
      result.acc_i_ser = req.body.acc_i_ser,
      result.acc_i_clss = req.body.acc_i_clss,
      result.acc_i_remarks = req.body.acc_i_remarks,
      result.acc_i_prps = req.body.acc_i_remarks,
      result.Acc_PO_ID = req.body.Acc_PO_ID,
      result.Acc_PO_SupplierName = req.body.Acc_PO_SupplierName,
      result.Acc_InvoiceNumber = req.body.Acc_InvoiceNumber

      // Save if all is good
      result.save((err, result) => {
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
  Acc.deleteAccountabilityRecord({_id: req.params.id}, (err, result) => {
    if(err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    } 

    if (result.deletedCount === 0 || !result) {
      res.send({success: false, msg: "Accountability record not found."});
    } else {
      res.send({success: true, msg: 'Accountability record deleted!'});
    }
  });
});

module.exports = router;