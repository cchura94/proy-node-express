import models from "./../models"
import bcrypt from "bcrypt"

export const listar = async (req, res) => {
    res.render("admin/usuario/listar")
}

export const nuevo = async (req, res) => {
    res.render("admin/usuario/nuevo.ejs")
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
            console.log("El correo ya existe")
            res.redirect("/admin/usuario/nuevo")
        }else{
            await models.Usuario.create(usuario);
            res.redirect("/admin/usuario");
        }
    }catch(error){
        console.log(error)
    }

    res.send("Error al guardar el usuario");
}