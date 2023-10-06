'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHeroes extends Model {
    
    static associate(models) {
      SuperHero.belongsToMany(models.SuperPowers, {through: 'superhero_to_superpowers', foreingKey: "heroId"})
      SuperHero.hasMany(models.HeroImg, {foreingKey: "heroId"})
    }
  }
  SuperHeroes.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    realName: {
      type: DataTypes.STRING, 
      allowNull: false, 
      field: 'real_name'},
    originDescription: {
      type: DataTypes.TEXT, 
      allowNull: false, 
      field: 'origin_description'},
    catchPhrase: {
      type: DataTypes.STRING, 
      allowNull: false, 
      field: 'catch_phrase'}
  }, {
    sequelize,
    modelName: 'SuperHeroes',
    tableName: 'super_heroes'
  });

  return SuperHeroes;
};