/**
 * Created by wuxiaoran on 2017/8/16.
 */
import mongoose from 'mongoose';

const recordOperationSchema = mongoose.Schema({

  medicineId: {
    type: Schema.ObjectId, ref: 'medicines',
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  planId: {
    type: Schema.ObjectId, ref: 'plans',
    required: true,
  },
  takeTime: {
    type: [Number],
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
  status: {
    type: Number,
    enum: [1, 2], // 1: 已服, 2: 未服
    required: true,
  },
  source: {
    type: Number,
    enum: [1, 3], // 1: 服务器生成, 3: 用户操作
    required: true,
  },
  confirmedAt: {
    type: Number,
    required: true,
  },
},{
  collection: 'recordOperations',
});

const RecordOperation = mongoose.model('RecordOperation',
  recordOperationSchema);

module.exports = RecordOperation;
