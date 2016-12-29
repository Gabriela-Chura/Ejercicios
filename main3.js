function factorial(n) {
    var factorial = 1; 
    if(n>0){
    for (var i=1; i <=n; i++)
    {
        factorial = factorial * i;
    }
    return factorial; 
        }
    else {
        return null; 
    }
}