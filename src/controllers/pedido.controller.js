import models from './../models'

export const index = (req, res) => {
    res.render("admin/pedido/listar");
}

export const nuevo = (req, res) => {
    res.render("admin/pedido/nuevo");
}

export const listar = async (req, res) => {
    const result = await models.Pedido.findAll({
        //include: Producto
      });
      console.log(result)
      res.json(result)
}

export const mostrar = async (req, res) => {
    let id = req.params.id
    const result = await models.Pedido.findOne({
        where: { id: id },
        include: [models.Producto, models.Cliente]
      });
      console.log(result)
      res.json(result)
}


export const guardar = async (req, res) => {
    let datos = req.body;
    let carrito = datos.carrito
    console.log(datos)
    let pedido = {
        fecha_pedido: Date.now(),
        monto_total: datos.monto_total,
        estado: 1,
        clienteId: datos.cliente,
        // personalId: 
    }

    let ped = await models.Pedido.create(pedido)
// add productos al pedido
    carrito.forEach(async (prod) => {
        await ped.addProducto(prod.id_prod, {through: {cantidad: prod.cantidad}})
    });

    console.log(ped)
    res.json(ped)
}