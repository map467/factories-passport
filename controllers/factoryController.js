const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var Factory = require('../models/factory');

router.get('/', (req, res) => {
  Factory.find((err, doc) => {
    if(!err) { res.send(doc); }
    else { console.log('Error in retrieving Factories :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req, res) =>{
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  Factory.findById(req.params.id, (err, doc) =>{
    if(!err) { res.send(doc); }
    else { console.log('Error in retrieving factory :'+ JSON.stringify(err, undefined, 2)); }
  })
})

router.post('/', (req, res) =>{
  var numChildren =req.body.children;
  var max = req.body.upper
  var min = req.body.lower
  var i;
  var nodes= [];

  for(i = 0; i < numChildren; i++){
    nodes.push(Math.floor(Math.random() * (max - min)) + min);
  }
  var fac = new Factory({
    name: req.body.name,
    lower: min,
    upper: max,
    children: nodes,
  });
  fac.save((err, doc) => {
    if (!err) {
      res.send(doc);
      console.log(fac.name);
    }
    else { console.log('Error in Factory Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
   if (!ObjectId.isValid(req.params.id))
     return res.status(400).send(`No record with given id: ${req.params.id}`);
   var numChildren =req.body.children;
   var max = req.body.upper
   var min = req.body.lower
   var i;
   var nodes= [];

   for(i = 0; i < numChildren; i++){
     nodes.push(Math.floor(Math.random() * (max - min)) + min);
   }
  var fac = {
    name: req.body.name,
    lower: min,
    upper: max,
    children: nodes,
  };
  Factory.findByIdAndUpdate(req.params.id, { $set: fac }, { new: true}, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving Factories :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) =>{
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  Factory.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {res.send(doc);}
    else { console.log('Error in Factory Delete :'+ JSON.stringify(err, undefined, 2)); }
  })
})

module.exports = router;
