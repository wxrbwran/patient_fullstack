/**
 * Created by wuxiaoran on 2017/8/22.
 */
const jsonwebtoken  = require('jsonwebtoken');
const config = require('../config');

export function decodeToken(token) {
  const decode = jsonwebtoken.verify(token.split(' ')[1],
    config.token.secret);
  return decode;
}
