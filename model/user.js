const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  documentType: {
    type: String,
    required: true,
  },
  idCard: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  direction: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  sex: {
    type: String,
  },
  placeBirth: {
    type: String,
  },
  dateBirth: {
    type: String,
  },
  civilStatus: {
    type: String,
  },
  category: {
    type: String,
  },
  personalType: {
    type: String,
  },
  plan: {
    type: String,
    default: "BASICO",
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  beneficiaries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "beneficiary",
    },
  ],
  registrationDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const model = mongoose.model("user", UserSchema);

module.exports = model;
