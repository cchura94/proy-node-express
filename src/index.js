// importar dependencias del core de node
// importar dependencias o paquetes de terceros (NPM)
import express from 'express'
// var expressLayouts = require('express-ejs-layouts');
import expressLayouts from 'express-ejs-layouts'
// importar dependencias o modulos locales
import rutas from "./routes"

// configurar paquetes
let app = express()

// declarar variables auxiliares
const PORT = process.env.PORT || 3000
app.set("puerto", PORT)

// archivos staticos (css, js, img)
app.use(express.static('public'))

// configurar el motor de plantillas
app.set('view engine', 'ejs')
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.set('views', './src/views')

// configurar peticiones del cliente (req.body)
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

// rutas
app.use("/", rutas)
// levantamos el servidor
app.listen(app.get("puerto"), () => {
    console.log(`Servidor levantado en http://127.0.0.1:${app.get('puerto')}`);
});
