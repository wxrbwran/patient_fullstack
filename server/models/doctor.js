/**
 * Created by wuxiaoran on 2017/8/16.
 */
import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
},{
  collection: 'doctors',
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
