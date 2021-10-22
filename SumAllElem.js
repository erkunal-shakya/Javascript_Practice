
function sumAllElem(arr)
{
  var start=Math.min(arr[0],arr[1]);
  var end=Math.max(arr[0],arr[1]);
  var sum=0;
  for(let i=0; i<=end; i++)
  {
    sum =sum + i;
    // console.log(i)
  }
return sum;
}
console.log(sumAllElem([4,1]));