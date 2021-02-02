'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teamodinaka = sequelize.define('Teamodinaka', {
    name: DataTypes.STRING
  });

  Teamodinaka.associate = function (models) {
    models.Teamodinaka.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Teamodinaka;
};
