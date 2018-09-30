/**
 * Created by wuxiaoran on 2017/8/9.
 */
const mongoose = require('mongoose');

const validateCodeSchema = mongoose.Schema({
  tel: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  }
},{
  collection: 'validateCodes',
});

const ValidateCode = mongoose.model('ValidateCode',
  validateCodeSchema);

module.exports = ValidateCode;

