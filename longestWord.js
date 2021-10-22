function Longest(str){
    var words=str.split(" ");
var longest="";
    for( let word of words)
    {
if(word.length>longest.length){
    longest=word;
}
    }
    return `the longest word is '${longest}' and have '${longest.length}' word length`;
    
}
console.log(Longest("flash is the fastest furiously man alive"));