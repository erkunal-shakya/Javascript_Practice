
//first method with predefine functions
function ReverseString(str){
var arr=str.split("").reverse().join("");
console.log(`The reverse of ${str} is ${arr}`);
}
ReverseString('kunaal');

// second method with loop OLD SCHOOL

function ReverseStringg(str){
    var reversed='';
    for(let Char of str){
        var reversed = Char + reversed;
    }
    console.log({output:reversed});
    }
    ReverseStringg('Ritika');