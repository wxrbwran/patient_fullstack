/**
 * Created by wuxiaoran on 2017/8/9.
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  tel: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  height: String,
  weight: String,
  waistline: String,
  area: [String],
  address: String,
  avatar: String,
  birthday: Number,
  sex: {
    type: Number,
    enum: [0, 1, 2], // 0: 女, 1: 男, 2: 其他
    default: 2,
  },
  status: {
    type: Number,
    enum: [0, 1, 2], // 0: invalid, 1: 正常, 2: 未完成
  },
  type: {
    type: Number,
    enum: [1, 2], // 1: 患者, 2: 家属
  },
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
  collection: 'users',
});
userSchema.virtual('BMI').get(function() {
  if (!!this.height && !!this.weight) {
    return ((+this.weight)/(Math.pow((+this.height)/100, 2)))
      .toFixed(2);
  } else {
    return 0;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

