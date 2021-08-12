import models from './../models'

export const index = (req, res) => {
    res.render("admin/pedido/listar");
}

export const nuevo = (req, res) => {
    res.render("admin/pedido/nuevo");
}