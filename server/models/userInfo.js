/**
 * Created by wuxiaoran on 2017/8/15.
 */
import mongoose from 'mongoose';

const userInfoSchema = mongoose.Schema({
  name: String,
  area: String,
  address: String,
  avatar: String,
  birthday: Number,
  sex: {
    type: Number,
    enum: [0, 1, 2], // 0: 女, 1: 男, 2: 其他
  },
  status: {
    type: Number,
    enum: [0, 1, 2], // 0: invalid, 1: 正常, 2: 未完成
  },
  tel: {
    type: String,
    require: true,
  },
  type: {
    type: Number,
    enum: [1, 2], // 1: 患者, 2: 家属
  },
  height: String,
  weight: String,
  waistline: String,
  marriage: {
    type: Number,
    enum: [0, 1], // 1: 已婚, 0: 未婚
  },
  education: {
    type: Number,
    enum: [1, 2, 3, 4, 5], // 1: 初中以下, 2: 高中, 3: 大专, 4:本科, 5: 研究生及以上
  },
  bindingDoctor: {
    type: [String],
  }
}, {
  collection: 'userInfos',
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;
