function fizzbuzz(num){
    for(let i=0; i<=num; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz');
            i++
        }
        if(i%3===0){
            console.log('Fizz');
            i++
        }
        if(i%5===0){
            console.log('Buzz');
            i++
        }
        if(i%3===0){
            console.log('Fizz');
            i++
        }
        if(i>num) break;
        else console.log(i);
    }

}
fizzbuzz(15);