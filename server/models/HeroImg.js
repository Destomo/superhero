'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroImg extends Model {

    static associate(models) {
      HeroImg.belongsTo(models.SuperHero, {foreignKey: "heroId"})
    }
  }
  HeroImg.init({
    img: {
      type:DataTypes.STRING
  }
  }, {
    sequelize,
    modelName: 'HeroImg',
    tableName: 'hero_img'
  });
  return HeroImg;
};