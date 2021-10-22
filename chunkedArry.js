function chunk(arr,n){
    let chunked=[];
    for(let elem of arr){
        let last=chunked[chunked.length-1];
        if(!last || last.length===n){
            chunked.push([elem]);
        }
        else{
            last.push(elem);
        }

    }
    console.log({chunked});

}
chunk([1,45,2,4,89,2,783,77,78,223],2)