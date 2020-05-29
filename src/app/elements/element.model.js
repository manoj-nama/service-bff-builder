const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const elementSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const elementModel = mongoose.model('Element', elementSchema);
module.exports = elementModel;