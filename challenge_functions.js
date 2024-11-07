let n;

n = prompt("Ingresa un numero");

function regularFunctionA(n){
    if (n % 2 == 0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}

const arrowFunction = (n) =>{
    if (n % 2 == 0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}


const regularFunctionB = function (n){
    if (n % 2 == 0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}

regularFunctionA(n);
arrowFunction(n);
regularFunctionB(n);