import express from "express"
let router = express.Router();

// rutas de página web
router.get("/", function(req, res){
    res.send("Hola");
})

router.get("/acercade", function(req, res){
    res.send("Acerca de Nosotros");
})

module.exports = router