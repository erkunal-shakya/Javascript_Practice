

function Largestarray(arr){
    maxes=[];
    for(let i=0; i<arr.length; i++){
        var maxlist=arr[i][0];
        for(let j=0; j<arr[i].length; j++){
            var current=arr[i][j];
            // console.log(arr[i][j]);
            if(current >= maxlist)
            {
                maxlist=current;
            }

        }
        maxes.push(maxlist);
    }
return maxes;
}
console.log(Largestarray([[4,5,2,7],[22,55,66,23],[78,1,62,99],[1002,7008,995,4065]]));