import express from "express"
let router = express.Router();

import * as paginaController from "./../controllers/pagina.controller"
import * as categoriaController from "./../controllers/categoria.controller"

/*
import PaginaController from "../controllers/pagina.controller"; "./../controllers/pagina.controller"
let pc = new PaginaController
*/
// rutas de página web
router.get("/", paginaController.inicio);
router.get("/acercade", paginaController.nosotros);
router.get('/login', paginaController.ingresar);

// rutas de administración
// categoria
router.get("/categoria", categoriaController.listar)
router.get("/categoria/:id", categoriaController.mostrar)

module.exports = router