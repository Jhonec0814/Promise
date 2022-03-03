function recibirCredencial(nombre,correo,password,plan,callback){

    setTimeout(function(){
        let usuario = {nombre:nombre, correo:correo, password:password, plan:plan}
        callback(usuario)

    },10000)
}

recibirCredencial("Valentina","valentina@quetesa.superwow","valentinacomepan123","Anual",function(usuario){

    console.log(`Estimado usuario ${usuario.nombre}, bienvenido a HBO max, aquí podrás disfrutar de tu plan ${usuario.plan}`)

})