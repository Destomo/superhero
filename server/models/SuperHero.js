'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHeroes extends Model {
    
    static associate(models) {
      
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
      field: 'originDescriptions'},
    catchPhrase: {
      type: DataTypes.STRING, 
      allowNull: false, 
      field: 'catchPhrase'}
  }, {
    sequelize,
    modelName: 'SuperHeroes',
    tableName: 'super_heroes'
  });
  return SuperHeroes;
};