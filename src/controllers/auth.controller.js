import models from "./../models"
import bcrypt from "bcrypt"

export const login = async (req, res) => {
  let correo = req.body.correo;
  let clave = req.body.clave;

  // let { correo, clave } = req.body
  // primero validar
  // consultar si el correo existe en la bd  
    let usuario = await models.Usuario.findOne({where: {email: correo}})
    
    if(usuario === null){
        console.log("El Usuario no existe en la BD")
        res.redirect("/login")
    }else{
        // comparar si el hash es igual a la clave del cliente
        let result = await bcrypt.compare(clave, usuario.password)
        
        if(result){

            res.redirect("/admin/categoria")
        }else{

            res.redirect("/login")
        }
    }
        // si existe verificar la contraseña
  // si no existe - enviar un respuesta (las credenciales son incorrectas)

}

export const registro = async (req, res) => {
    req.body.username = "prueba";
    req.body.email = req.body.correo
    await models.Usuario.create(req.body);
    console.log("Usuario registrado")
} 