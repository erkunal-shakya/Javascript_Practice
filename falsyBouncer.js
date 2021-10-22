function Bouncer(arr){
    var truthies=[];
    for(let elem of arr){
        if(elem) truthies.push(elem);
    }
    return truthies;

}
console.log(Bouncer([5,'kunnu',false,NaN,3,true]));

// second method

function bouncher(arr){
 return arr.filter(function(elem){
     return elem;
 })
}
console.log(bouncher([5,'kunnu',false,NaN,3,true,undefined]));