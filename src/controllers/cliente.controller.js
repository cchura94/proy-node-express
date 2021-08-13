import models from './../models'

export const index = (req, res) => {
    res.render("admin/producto/index");
}

// Api Rest Full
export const lista = async (req, res) => {
    let clientes = await models.Cliente.findAll();
    res.json(clientes);
}

export const guardar = async (req, res) => {
    try{
        let datos = req.body;
        let resp = await models.Cliente.create(datos)
        res.json({mensaje: 'Cliente Registrado', resp: resp, error: false})
    }catch(error){
        console.log(error)
        res.json({mensaje: 'Ocurrio un error al guardar el Cliente', error: true})
    }    
}

export const modificar = async (req, res) => {
    try{
        let id = req.params.id
        let datos = req.body

         if(req.file){
            datos.imagen = req.file.filename
        }

        await models.Producto.update(datos, {where: {id}})
        res.json({mensaje: 'Producto Modificado', error: false})
    }catch(error){
        console.log(error)

        res.json({mensaje: 'Ocurrio un error al modificar el producto', error: true})
    }    
}

export const eliminar = async function(req, res) {

    let id = req.params.id;

    await models.Producto.destroy({
        where: {
          id: id
        }
      });

      res.json({mensaje: 'Producto Eliminado', error: false})
  
}