/**
 * Created by wxr on 17/6/10.
 */
module.exports = {
  cookieSecret: 'wuxiaoran',
  db: {
    name: 'patient',
    user: 'patient',
    password: 'patient'
  },
  token: {
    secret: 'patient',
    expired: '1h',
    refresh: '1h'
  },
  password: {
    salt: 'patient',
    secret: 'wxrrua'
  },
};
