const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: ""
  },
  help: {
    type: String,
    required: true
  }
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
