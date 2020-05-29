const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const projectModel = mongoose.model('Project', projectSchema);
module.exports = projectModel;