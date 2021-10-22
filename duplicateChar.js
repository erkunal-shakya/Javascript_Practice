function duplicateChar(str){
    let obj={};
    let  maxnumber=0;
    let  maxchar='';
    for(let char of str){
        if(!obj[char]){
            obj[char]=1;
        }
        else{
            obj[char]++;
        }
    }
    
    for(let char in obj){
        if(obj[char]>=maxnumber){
            maxnumber=obj[char];
            maxchar=char;
        }
    }
    console.log(obj);  // at this time we got an object with numbers
    console.log(`${maxchar} appear in ${maxnumber} times`);


}
duplicateChar("magento developers is  super");