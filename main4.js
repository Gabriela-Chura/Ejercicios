function stringMultiplicar(n) {
    var salida= "";
    var tabla; 
    
    for (var i=1; i<=10; i++)
    {
        tabla= i*n;
        salida += n + "x" + i + "=" + tabla;  
        
        if ((i+1)<=10) {
            salida+="/";
        }
    }
    return salida; 
}
