function recibirCredencial(nombre,correo,password,plan){

    let promesa= new Promise(function(resolve,reject){

        setTimeout(function(){

            let usuario = {nombre:nombre, correo:correo, password:password, plan:plan}

            console.log("Holi")
            reject("Bienvenido a HBO"+ usuario.nombre)
            
        },3000)

    })  

    return promesa
}

recibirCredencial("Valentina","valentina@quetesa.superwow","valentinacomepan123","Anual")

.catch(function(respuesta){

    console.log(respuesta)

})