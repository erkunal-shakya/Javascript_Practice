function factorial(num){
    var result=1;
    for(let i=1; i<=num; i++){
        result=result*i;
    }
    return result;
}
console.log(factorial(6));   // factorrial return 5 = 5*4*3*2*1=120