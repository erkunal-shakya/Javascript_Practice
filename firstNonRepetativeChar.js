
function FirstNonRep(str){
    for(i=0; i<=str.length; i++){
        if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
            console.log('Fisrt Non Repetative char : ',str.charAt(i));
            break;
        }

    }
}
FirstNonRep('hello world')


function FirstRep(str){
    for(i=0; i<=str.length; i++){
        if(str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))){
            console.log('Fisrt Repetative char : ',str.charAt(i));
            break;
        }else{console.log('no repetative char found'); break;}

    }
}
FirstRep('abcad')