/**
 * Created by wuxiaoran on 2017/8/16.
 */
import mongoose from 'mongoose';

const adviceSchema = mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
  },
  sentAt: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
},{
  collection: 'advices',
});

const Advice = mongoose.model('Advice', adviceSchema);

module.exports = Advice;
