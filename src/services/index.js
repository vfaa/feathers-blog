const blogs = require('./blogs/blogs.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(blogs);
  app.configure(users);
};
