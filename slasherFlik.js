function slasher(arr,howmany){
    arr.splice(0,howmany);
    return arr;

}
console.log(slasher(['kunnu','munnu','chunnu','bunnu'],2));

// output [ 'chunnu', 'bunnu' ]