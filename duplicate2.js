function duplicate(a,b){
    var str1=a.split(' ');
    var str2=b.split(' ');
    var result=[];
    for (let chart of str1){
  for(let char of str2)
  {
    if(char===chart)
    {
      result.push(char);
    }
  }
      
    }
    
  
  return result;
  
  }
  duplicate('ram is a good boy','ram goes good to market');