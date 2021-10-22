const user=[
    {firstname:'kunal',lastname:'shakya',age:25},
    {firstname:'raj',lastname:'shukla',age:52},
    {firstname:'binod',lastname:'sharma',age:45},
    {firstname:'pralabh',lastname:'gote',age:25},
];

// const output=user.filter(function(user){
//     if(user.age<30){
//         return user.firstname;
//     }
// }).map(x=>x.firstname)

// console.log(output);

const output = user.reduce((acc, current) => {

    if(current.age < 30){
        acc.push(current.firstname);
    }
    
    return acc;

  }, []);

  console.log(output);