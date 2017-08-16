/**
 * Created by wuxiaoran on 2017/8/16.
 */
import mongoose from 'mongoose';

const planSchema = mongoose.Schema({
  takeAt: {
    type: [Number],
    required: true,
  },
  medicineId: {
    type: Schema.ObjectId, ref: 'medicines',
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  dosage: {
    type: Number,
    required: true,
  },
  cycleDays: {
    type: Number,
    required: true,
  },
  zone: {
    type: Number,
    required: true,
  },
  started: {
    type: Number,
    required: true,
  },
  ended: {
    type: Number,
    required: true,
  },
  dosageUnit: {
    type: String,
    enum: ['mg', 'g', 'ml', 'UI'],
    required: true,
  },
},{
  collection: 'plans',
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
