/* {} y [] es como poner new (Object|Array) */

//var almacenDeObjetosDeseables = new Array();

for(var i = 0;i < 50000;i++){
    //print(miObjetoDelDeseo);
    var miObjetoDelDeseo = {
        _id:i+1,
        iban:"ES19-1234-5678-9012-3456-7890",
        tipo:"Cargo",
        moneda:"Euro",
        valor:12345.67,
        fecha_valor: new Date(),
        fecha_operacion: new Date()
    }
    //almacenDeObjetosDeseables.push(miObjetoDelDeseo);
    db.miPrimeraColeccion.insert(miObjetoDelDeseo);
}
