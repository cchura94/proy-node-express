'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // N:M
      models.Pedido.belongsToMany(models.Producto, {
        through: {
          model: "PedidoProductos",
        },
        foreignKey: "pedidoId"
      })
      // N:1
      models.Pedido.belongsTo(models.Cliente, {
        foreignKey: 'clienteId'
      });
    }
  };
  Pedido.init({
    fecha_pedido: DataTypes.DATE,
    monto_total: DataTypes.DECIMAL,
    estado: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER,
    personalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
    paranoid: true
  });
  return Pedido;
};