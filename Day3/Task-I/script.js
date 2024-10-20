function sub(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}

function compute(callback, x, y){
    return callback(x,y);
}

console.log("Sum = ", compute(sub, 11, 8));
console.log("Multiplication = ", compute(mul, 11, 8));