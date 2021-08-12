import models from "./../models/"

export const listar = async (req, res) => {
    // promesa
   /* models.Categoria.findAll().then(res => {
        console.log(res)
    })
    */
    // async/await
    try{
        let datos = await models.Categoria.findAll()
        console.log(datos)
        // select * from categorias
        res.render("admin/categoria/lista", {datos: datos, mensaje: req.flash('mensaje')})

    }catch(error){
        console.log(error)
    }
}

export const apiListar = async (req, res) => {
    
    try{
        let datos = await models.Categoria.findAll()
        res.json(datos)
    }catch(error){
        console.log(error)
    }
}


export const mostrar = (req, res) => {
    let id = req.params.id
    models.Categoria.findOne({
        where: {id: id}
    }).then(res => {
        console.log(res)
    }).catch(error => {
        console.log(error)
    })
    res.render("admin/categoria/mostrar")
}

export const guardar = async (req, res) => {
    try{
        let datos = req.body
        await models.Categoria.create(datos)
        res.redirect("/admin/categoria");
    }catch(error){
        console.log(error)
    }    
}