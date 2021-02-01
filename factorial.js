// var fact = 1;
// for(var i=1;i<=5;i++) {
//     fact= fact*i;
//     console.log(i, fact);
// }


// var fact = 1;
// var i = 1;
// while(i<=5){
//     fact = fact*i;   
//     console.log(i,fact);
//     i++;
// }

//find factorial using function 

// function factorial(num){
//     var fact = 1;
//     for(var i = 1;i<=num;i++){
//         fact = fact*i;
//         return fact;
//     }
    
// }
// fact = factorial(5);
// console.log(fact);


function factorial(num){
    var fact = 1;
    for(var i = 1; i<=num; i++){
        fact = fact*i; 
        console.log(i);
    }   
    return fact;
}
fact = factorial(0);
console.log(fact);