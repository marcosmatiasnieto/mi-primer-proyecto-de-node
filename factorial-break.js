// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
var num = 1;
var i=1;
while (true) {
    
    if (i >= 10){
        break;
    }
    i++;
    num  = num * i;
    

    console.log(num);
}