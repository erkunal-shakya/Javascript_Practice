function pop(arr){
    var result=[];
    var arg= Array.from(arguments);
    arg.splice(0,1);
    // console.log(arg)
    for( let elem of arr)
    {
    if(arg.indexOf(elem)===-1)
    {
      result.push(elem);
    }
    }
    return result;
    }
    pop([1,3,2,4,6,5,7,8,8,9],2,8,7);