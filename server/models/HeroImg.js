'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heroImg extends Model {

    static associate(models) {
      
    }
  }
  heroImg.init({
    img: {
      type:DataTypes.STRING,
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'HeroImg',
    tableName: 'hero_img'
  });
  return heroImg;
};