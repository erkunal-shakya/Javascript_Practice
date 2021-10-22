
// first method
function testCase(str){
    var string= str.toLowerCase().split(" ");
    // console.log(string);
    for( let i=0; i<string.length; i++){
        string[i]=string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join(" ");

}
console.log(testCase("i'am a good boy sir"));


// second method
function testCasse(str){
    var string= str.toLowerCase().split(" ").map(function(elem){
      return  elem[0].toUpperCase() + elem.slice(1);
    });
    return string.join(" ");

}
console.log(testCasse("i'am a badd boy sir"));