module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4c1622e0577e4929f076ab41f3c11e6'),
  },
});
