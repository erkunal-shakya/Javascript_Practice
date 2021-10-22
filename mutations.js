 function mutation(arr){
     let firstarr=arr[0].toLowerCase();
     let secondarr=arr[1].toLowerCase();
     for(let i=0; i<secondarr.length; i++)
     {
         if(firstarr.indexOf(secondarr[i]) === -1) return false;
     }
return true;
 }
 console.log(mutation(["hello","ello"]));