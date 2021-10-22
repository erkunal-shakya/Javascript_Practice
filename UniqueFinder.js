function UniqueArr(arr,arrr)
{
var array=[];

for( let i=0; i<arr.length; i++)
{
  if(arrr.indexOf(arr[i])=== -1)
  {
     array.push(arr[i]);
  }
}


for( let j=0; j<arrr.length; j++)
{
  if(arr.indexOf(arrr[j])=== -1)
  {
     array.push(arrr[j]);
  }
}
return array;

}
UniqueArr([1,2,3,5],[1,2,3,4,5]);