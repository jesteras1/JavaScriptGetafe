function valorAleatorio(numeroDigitos){
    var resultado = 0;
    // Convertir el numero de digitos en el 
    // maximo valor + 2 
    // para almacenar posteriormente los digitos decimales
    var maximo = Math.pow(10,numeroDigitos+2);
    // generar numero aleatorio con maximo valor 
    // incluyendo numeros decimales
    var valorSinProcesar = Math.random() * maximo;
    // redondeo, por lo cual me queda un numero de 7
    var valorRedondeado = Math.floor(valorSinProcesar)
    // Saco los dos decimales y lo almaceno en el resultado
    resultado = valorRedondeado / 100;
    return resultado;
}