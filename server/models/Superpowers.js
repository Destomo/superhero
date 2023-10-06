'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPowers extends Model {
  
    static associate(models) {
      SuperPowers.BelongsToMany(models.SuperHero, {
        foreingKey: 'superPowerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  SuperPowers.init({
    superPower: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SuperPowers',
    tableName: 'super_powers'
  });

  SuperPowers.associate = (models) => {
    SuperPowers.BelongsToMany(models.SuperHero, {through: 'superhero_to_superpowers', foreingKey: "superPowerId"})
  };

  return SuperPowers;
};