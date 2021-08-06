// importar dependencias del core de node
// importar dependencias o paquetes de terceros (NPM)
import express from 'express'
// var expressLayouts = require('express-ejs-layouts');
import expressLayouts from 'express-ejs-layouts'
// importar dependencias o modulos locales
import rutas from "./routes"

import session from "express-session"
import flash from "connect-flash"

// configurar paquetes
let app = express()

// config session

app.use(session({
	secret:'MI_CODIGO_SECRETO',
	saveUninitialized: true,
	resave: true,
	cookie: {
		maxAge: 60000*60
	}
}));
// config flash
app.use(flash());

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
