var UserMeta = require('./user.js'),
    connection = require('../modules/sequelize.js');

var User = connection.define('users', UserMeta.attributes, UserMeta.options);

// you can define relationships here

module.exports.User = User;