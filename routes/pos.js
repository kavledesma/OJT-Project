const express = require('express');
const router = express.Router();
const config = require('../config/database');
const dateFormat = require('dateformat');
const moment = require('moment');
const PO = require('../models/po');

var DateToday = new Date();

/* CRUD Stuff */
/* Create */
router.post('/add/new', (req, res, next) => {
  let newPO = new PO ({
    po_id: req.body.po_id,
    po_date: req.body.po_date,
    po_s_name: req.body.po_s_name,
    po_i_desc: req.body.po_i_desc,
    po_t: req.body.po_t,
    po_client: req.body.po_client,
    po_stat: req.body.po_stat,
    po_rcvr: req.body.po_rcvr,
    po_d_rcvd: req.body.po_d_rcvd,
    po_remarks: req.body.po_remarks
  });

  // Save if all is good
  PO.addNewPurchaseOrder(newPO, (err, po) => {
    if(err) {
      res.send({success: false, msg:'Server-side error occured! Open your website console to view error.', err: err});
    } else {
      res.send({success: true, msg: 'Saved!'});
    }
  });
});

/* Read */
router.get('/rd/all', (req, res, next) => {
  PO.getAllPurchaseOrderRecords((err, result) => {
    if(err) {
      res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    } else {
      res.json(result);
    }
  });
});

// Displays the next PO ID
router.get('/rd/id', (req, res, next) => {
  // Sorts the records from latest to oldest // Saves the searched entry to variable 'resultLatestEntry'
  PO.findOne().sort({po_date: -1}).exec((err, resultLatestEntry) => {
    // Display error if there's one
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    const startOfCurrentMonth = moment().startOf('month');
    const endOfCurrentMonth = moment().endOf('month');

    // Searches records by date ordered (btn the current month) and counts it // Saves the searched entries to variable 'resultCount' 
    PO.find({ po_date: { $gt: startOfCurrentMonth.toDate(), $lte: endOfCurrentMonth.toDate() }}).countDocuments((err, resultCount) => {
      // Displays error if there's one 
      if (err) {
        return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
      } 

      // If there are no records yet
      if (!resultLatestEntry) {
        const id = "IT-" + DateToday.getFullYear() + "-" + dateFormat(DateToday, "mm") + "-1";
        return res.json(id);
      }
      
      // IT-<year today>-<month today>-<qty of entries within range>
      var new_id = "IT-" + DateToday.getFullYear() + "-" + dateFormat(DateToday, "mm") + "-" + (resultCount + 1);
      res.json(new_id);
    });
  });
});

/* Update */
router.put('/upd/:id', (req, res, next) => {
  const id = req.params.id;

  // Search entry by ObjectID // Save entry to variable 'result'
  PO.findsObjectIDThatWillBeEdited(id, (err, result) => {
    // Displays error if there's one
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    // Checks if entry have a match
    if (!result) {
      res.json({success: false, msg: 'Purchase order not found.'});
    } else {
      result.po_id = req.body.po_id,
      result.po_date = req.body.po_date,
      result.po_s_name = req.body.po_s_name,
      result.po_i_desc = req.body.po_i_desc,
      result.po_t = req.body.po_t,
      result.po_client = req.body.po_client,
      result.po_stat = req.body.po_stat,
      result.po_rcvr = req.body.po_rcvr,
      result.po_d_rcvd = req.body.po_d_rcvd,
      result.po_remarks = req.body.po_remarks,
      
      // Save if all is good
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

  PO.deletePurchaseOrderRecord(id, (err, result) => {
    if(err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    } 

    if (result.deletedCount === 0 || !result) {
      res.send({success: false, msg: "Purchase order not found."});
    } else {
      res.send({success: true, msg: 'Purchase order deleted!'});
    }
  });
});

module.exports = router;