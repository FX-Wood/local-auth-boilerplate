'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: 'Invalid user name. Musct be between 1 and 99 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {msg: "Invalid email address"}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: "Password must be at least 8 characters."
        }
      }
    }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};