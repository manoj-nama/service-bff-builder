const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const endpointSchema = new Schema({
  name: { type: String, required: true },
  uri: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const endpointModel = mongoose.model('Endpoint', endpointSchema);
module.exports = endpointModel;