// importar dependencias del core de node
// importar dependencias o paquetes de terceros (NPM)
import express from 'express'
// importar dependencias o modulos locales
import rutas from "./routes"

// configurar paquetes
let app = express()

// declarar variables auxiliares
const PORT = process.env.PORT || 3000
app.set("puerto", PORT)

// archivos staticos (css, js, img)

// configurar el motor de plantillas
app.set('view engine', 'ejs')
app.set('views', './src/views')

// configurar peticiones del cliente (req.body)

// rutas
app.use("/", rutas)
// levantamos el servidor
app.listen(app.get("puerto"), () => {
    console.log(`Servidor levantado en http://127.0.0.1:${app.get('puerto')}`);
});
