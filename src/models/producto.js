'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // N:1
      models.Producto.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId'
      });
      // N:M
      models.Producto.belongsToMany(models.Pedido, {
        through: {
          model: "PedidoProductos",
        },
        foreignKey: "productoId"
      })
    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
    paranoid: true
  });
  return Producto;
};