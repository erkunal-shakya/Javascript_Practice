function repetN(str,num){
    var arr=[];
for( let i=1; i<=num; i++)
{
    arr.push(str);
}
return arr.join('');
}

console.log(repetN('kunal',10));