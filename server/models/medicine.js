/**
 * Created by wuxiaoran on 2017/8/16.
 */
import mongoose from 'mongoose';

const medicineSchema = mongoose.Schema({
  medicineName: {
    type: String,
  },
},{
  collection: 'medicines',
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
