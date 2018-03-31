'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    body: DataTypes.TEXT    
  }, {
    paranoid: true
  });
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};
