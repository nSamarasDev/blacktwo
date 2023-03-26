const mongoose = require("mongoose");
const slugify = require("slugify");
const { v4: uuidv4 } = require("uuid");

const ContactSchema = new mongoose.Schema({
  alt_id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: [500, "Description cannot be longer than 500 characters"],
  },
  resourse_id: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create slug from email
ContactSchema.pre("save", function (next) {
  this.resourse_id = slugify(this.alt_id, { lowerr: true });
  next();
});

module.exports = Contact = mongoose.model("contact", ContactSchema);
