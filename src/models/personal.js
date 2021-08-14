'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1:N
      models.Personal.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      })
    }
  };
  Personal.init({
    codigo: DataTypes.STRING,
    cargo: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personal',
    paranoid: true
  });
  return Personal;
};