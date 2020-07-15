const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Emp = require('../models/emp');

/* CRUD Activities */
/* Create */
// Create New Employee
router.post('/add/new', (req, res, next) => {
  let newEmp = new Emp({
    emp_id: req.body.emp_id,
    emp_lname: req.body.emp_lname,
    emp_fname: req.body.emp_fname,
    emp_mname: req.body.emp_mname,
    emp_hdate: req.body.emp_hdate,
    emp_jtitle: req.body.emp_jtitle,
    emp_dept: req.body.emp_dept,
    emp_stat: req.body.emp_stat,
    emp_fprint: req.body.emp_fprint,
    emp_skype: req.body.emp_skype,
    emp_domlog: req.body.emp_domlog,
    emp_badge: req.body.emp_badge,
    emp_sfx: req.body.emp_sfx,
    emp_name: req.body.emp_lname + ' ' + req.body.emp_fname
  });

  /* Name Uniqueness */
  Emp.findOne({emp_name: newEmp.emp_name}, (err, result) => {
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    if (result) {
      if (!req.body.emp_sfx) {
        return res.send({success: false, msg: 'Please add a suffix. There is already an employee named with your input.' });
      }

      // Search for entry with entered suffix // Save entry to variable 'result_sfx'
      Emp.findOne({emp_sfx: req.body.emp_sfx}, (err, result_sfx) => {
        // Displays error if there's one
        if (err) {
          return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
        }

        // Checks if the entered suffix have a match
        if (result_sfx) {
          return res.send({success: false, msg: 'The suffix you\'ve entered has been used! Please change it.' }); 
        }
        
        // Save if all is good
        Emp.addNewEmployeeRecord(newEmp, (err, result) => {
          if (err) {
            res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
          } else {
            res.send({success: true, msg: 'Saved!'});
          }
        });
      });
    } else {
      // Save if all is good
      Emp.addNewEmployeeRecord(newEmp, (err, result) => {
        if (err) {
          res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
        } else {
          res.send({success: true, msg: 'Saved!'});
        }
      });
    }
  });
});


/* Read */
// Get All Employees
router.get('/rd/all', (req, res, next) => {
  Emp.getAllEmployeeRecord((err, result) => {
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
  Emp.findsObjectIDThatWillBeEdited(id, (err, result) => {
    // Displays error if there's one
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }

    // Checks if entry have a match
    if (!result) {
      return res.send({success: false, msg: 'Employee not found.'});
    } 

    // Checks if entered employee ID have already exists
    if (req.body.emp_id) {
      // Searches for document with selected ObjectId // Save matched entry to variable 'result_empid'
      Emp.findOne({emp_id: req.body.emp_id}, (err, result_empid) => {
        // Displays error if there's one
        if (err) {
          return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
        }

        // Checks if there's matched entry
        if (result_empid) {
          // Checks if matched entry's ObjectID matches the selected entry to edit
          if (result_empid._id == id) {
            console.log("Continue...");
          } else {
            return res.send({ success: false, msg: 'Employee ID you\'ve entered already been used! Please edit it.' });
          }
        }

        result.emp_id = req.body.emp_id,
        result.emp_hdate = req.body.emp_hdate,
        result.emp_lname = req.body.emp_lname,
        result.emp_fname = req.body.emp_fname,
        result.emp_mname = req.body.emp_mname,
        result.emp_jtitle = req.body.emp_jtitle,
        result.emp_dept = req.body.emp_dept,
        result.emp_stat = req.body.emp_stat,
        result.emp_fprint = req.body.emp_fprint,
        result.emp_skype = req.body.emp_skype,
        result.emp_domlog = req.body.emp_domlog,
        result.emp_badge = req.body.emp_badge
        result.emp_name = req.body.emp_lname + " " + req.body.emp_fname,
    
        // Save if all is good
        result.save((err, result) => {
          if (err) {
            res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
          } else {
            res.send({success: true, msg: 'Saved!'});
          }
        });
      });
    }
  });
});

/* Delete */
router.delete('/del/:id', (req, res, next) => {
  const id = req.params.id;
  Emp.deleteEmployeeRecord(id, (err, result) => {
    if (err) {
      return res.send({success: false, msg: 'Server-side error occured! Open your website console to view error.', err: err});
    }
    if (result.deletedCount == 0 || !result) {
      res.json({success: false, msg: 'Employee not found.' });
    } else {
      res.send({success: true, msg: 'Employee deleted!'});
    }
  });
});

module.exports = router;