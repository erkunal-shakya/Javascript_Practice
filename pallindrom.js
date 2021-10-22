// palindrom mena same word when its reversed ex- AbbA == AbbA

// step 
// 1 take a string convert them in array reversed it and again convert it in string 
// 2 check it is equal to argument or not

function Palindrom(str){
    var result=str.split("").reverse().join("");
    if(str==result) console.log(`${str} is palindrom`);
    else console.log('not a palindrom');

}


Palindrom("bablu");


function Palindromm(str){
  var reverded='';
  for( let char of str){
      reverded= char + reverded;
  }
  if(str==reverded) console.log(`${str} is palindrom`);
  else console.log('not a palindrom');


}
Palindromm("ullu");