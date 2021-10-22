function ReverseINT(int){
    var arr=parseInt(int.toString().split("").reverse().join(""));
    console.log(`reverse integer of ${int} is ${arr}`);
}

ReverseINT(123456);