import express from "express"
let router = express.Router();

import * as authMiddleware from "./../middlewares/auth.middleware"

import * as paginaController from "./../controllers/pagina.controller"
import * as categoriaController from "./../controllers/categoria.controller"
import * as authController from "./../controllers/auth.controller"
import * as usuarioController from "./../controllers/usuario.controller"
import * as prodController from "./../controllers/producto.controller"
import * as pedController from "./../controllers/pedido.controller"

// para subir imagenes o documentos
import multer from 'multer'
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imagenes')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+'-'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

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
router.post("/registro", authMiddleware.estaLogueado, authController.registro);
// rutas de administración
// categoria
router.get("/admin/categoria", authMiddleware.estaLogueado,categoriaController.listar)
router.get("/admin/categoria/:id", authMiddleware.estaLogueado,categoriaController.mostrar)
router.post("/admin/categoria", authMiddleware.estaLogueado,categoriaController.guardar)
router.get("/api/categoria", authMiddleware.estaLogueado, categoriaController.apiListar);
// usuario
router.get("/admin/usuario", authMiddleware.estaLogueado, usuarioController.listar)
router.get("/admin/usuario/nuevo", authMiddleware.estaLogueado,usuarioController.nuevo);
router.post("/admin/usuario", authMiddleware.estaLogueado, usuarioController.guardar);
router.get("/admin/usuario/:id/editar", authMiddleware.estaLogueado, usuarioController.editar);
router.post("/admin/usuario/:id", authMiddleware.estaLogueado, usuarioController.modificar)
router.post("/admin/usuario/:id/eliminar", authMiddleware.estaLogueado, usuarioController.eliminar)

router.get("/random", usuarioController.aleatorio);

// producto
router.get("/admin/producto", authMiddleware.estaLogueado, prodController.index);

// End Points api rest
router.get("/api/producto", authMiddleware.estaLogueado, prodController.lista);
router.post("/api/producto", authMiddleware.estaLogueado, upload.single('imagen'), prodController.guardar);
router.put("/api/producto/:id", authMiddleware.estaLogueado, upload.single('imagen'), prodController.modificar);
router.delete("/api/producto/:id", authMiddleware.estaLogueado, prodController.eliminar);

// Pedido
router.get("/admin/pedido", authMiddleware.estaLogueado, pedController.index);
router.get("/admin/pedido/nuevo", authMiddleware.estaLogueado, pedController.nuevo);

module.exports = router