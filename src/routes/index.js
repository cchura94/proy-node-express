import express from "express"
let router = express.Router();

// rutas de página web
router.get("/", function(req, res){
    res.send("Saludos Humanos!");
})

router.get("/acercade", function(req, res){
    res.send("Acerca de Nosotros");
})

module.exports = router