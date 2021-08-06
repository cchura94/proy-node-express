
export const inicio = function(req, res){
    // res.send("Saludos Humanos!");
    res.render("index", {layout: 'layout-pagina'})
}

export const nosotros = function(req, res){
    // res.send("Acerca de Nosotros");
    res.render("nosotros", {layout: 'layout-pagina'})
}

export const ingresar = function(req, res){
    // res.send("Inicio de Sesion")
    res.render("login", {layout: 'layout-pagina', mensaje: req.flash('mensaje')})
}

/*
export default class PaginaController{
    inicio = function(req, res){
        res.send("Saludos Humanos!");
    }

    nosotros = function(req, res){
        res.send("Acerca de Nosotros");
    }
    
    ingresar = function(req, res){
        res.send("Inicio de Sesion")
    }    
}
*/