import express from "express"
let router = express.Router();

import * as paginaController from "./../controllers/pagina.controller"
import * as categoriaController from "./../controllers/categoria.controller"
import * as authController from "./../controllers/auth.controller"
import * as usuarioController from "./../controllers/usuario.controller"
/*
import PaginaController from "../controllers/pagina.controller"; "./../controllers/pagina.controller"
let pc = new PaginaController
*/
// rutas de página web
router.get("/", paginaController.inicio);
router.get("/acercade", paginaController.nosotros);
router.get('/login', paginaController.ingresar);

// rutas de Auth
router.post("/auth/login", authController.login);
router.post("/registro", authController.registro);
// rutas de administración
// categoria
router.get("/admin/categoria", categoriaController.listar)
router.get("/admin/categoria/:id", categoriaController.mostrar)
// usuario
router.get("/admin/usuario", usuarioController.listar)
router.get("/admin/usuario/nuevo", usuarioController.nuevo);
router.post("/admin/usuario", usuarioController.guardar);

module.exports = router