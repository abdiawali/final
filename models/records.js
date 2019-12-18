//map database table for the records

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    subject: DataTypes.STRING,
    when: DataTypes.STRING,
    howLong: DataTypes.FLOAT,
    style: DataTypes.STRING
  })
  Record.sync({force: true}).then( () => {
    console.log('synced table')
  })
  
  Record.associate = function(models) {
    // associations can be defined here
  };
  return Record;
};