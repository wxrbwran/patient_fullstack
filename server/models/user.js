/**
 * Created by wuxiaoran on 2017/8/9.
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  collection: 'users',
});

const User = mongoose.model('User', userSchema);

module.exports = User;

