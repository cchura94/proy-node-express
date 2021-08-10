import models from "./../models"
import bcrypt from "bcrypt"

export const listar = async (req, res) => {
    // select * from usuarios
    let usuarios = await models.Usuario.findAll();
    res.render("admin/usuario/listar", {datos: usuarios, mensaje: req.flash('mensaje')})
}

export const nuevo = async (req, res) => {
    

    res.render("admin/usuario/nuevo", {mensaje: req.flash('mensaje')})
}

export const guardar = async (req, res) => {

    let BCRYPT_SALT_ROUNDS = 12;
    const hashedPassword = await bcrypt.hash(req.body.clave, BCRYPT_SALT_ROUNDS);

    let usuario = {
        username: req.body.username,
        email: req.body.correo,
        password: hashedPassword
    }

    try{
        // verificar si el correo ya existe en la bd
        let u = await models.Usuario.findOne({where: {email: req.body.correo}})
        if(u !== null){
            
            req.flash('mensaje', 'El correo ya existe');
            res.redirect("/admin/usuario/nuevo")
        }else{
            await models.Usuario.create(usuario);

            req.flash('mensaje', 'Usuario registrado');
            res.redirect("/admin/usuario");
        }
    }catch(error){
        console.log(error)
    }

    res.send("Error al guardar el usuario");
}

export const editar = async (req, res) => {
    let id = req.params.id;
    let usuario = await models.Usuario.findByPk(id);
    res.render("admin/usuario/editar", {usuario: usuario, mensaje: req.flash('mensaje')})
}

export const modificar = async (req, res) => {
    let id = req.params.id;

    let BCRYPT_SALT_ROUNDS = 12;
    const hashedPassword = await bcrypt.hash(req.body.clave, BCRYPT_SALT_ROUNDS);

    let usuario = {
        username: req.body.username,
        email: req.body.correo,
        password: hashedPassword
    }

    try{
        // verificar si el correo ya existe en la bd
        await models.Usuario.update(usuario, {where: {id}})
        
        req.flash('mensaje', 'Usuario Actualizado');
        res.redirect("/admin/usuario");

    }catch(error){
        console.log(error)
    }
}

export const eliminar = async function(req, res) {

    let id = req.params.id;

    await models.Usuario.destroy({
        where: {
          id: id
        }
      });

    req.flash('mensaje', 'Usuario Eliminado');
    res.redirect("/admin/usuario");
}

export const aleatorio = async function(req, res) {
    let id_max = await models.Usuario.max('id'); // 40
    console.log(id_max);

    let random = Math.floor((Math.random()*id_max)+1);

    let ganador = await models.Usuario.findByPk(random)
    
    res.send("Ganador: " + ganador.email);
}