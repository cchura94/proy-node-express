import models from "./../models/"

export const listar = async (req, res) => {
    // promesa
   /* models.Categoria.findAll().then(res => {
        console.log(res)
    })
    */
    // async/await
    try{
        let res = await models.Categoria.findAll()
        console.log(res)

    }catch(error){
        console.lof(QueryError)
    }
    // select * from categorias
    res.render("admin/categoria/lista")
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
    }catch(error){
        console.log(error)
    }    
}