const radius=[5,4,8,9,7];

const area=function(radius){
return Math.PI * radius * radius;
}
const circumfarence=function(radius){
return 2*Math.PI * radius;
}
const diameter=function(radius){
return 2* radius;
}


const calculate=function(radius,logic){
    const output=[];
for(var i=0;i<radius.length;i++){
    output.push(logic(radius[i]));
}
return output;
}

console.log('Area will be:',calculate(radius,area));
console.log('circumfarence will be:',calculate(radius,circumfarence));
console.log('diameter will be:',calculate(radius,diameter));