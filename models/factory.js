const mongoose = require('mongoose');

const factorySchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
   },
  lower: { 
    type: Number,
    required: true,
   },
  upper: {  
    type: Number,
    required: true,
   },
  children: { 
    type: [Number],
    required: true,
   }
});
const Factory = mongoose.model('Factory', factorySchema);

module.exports = Factory;
