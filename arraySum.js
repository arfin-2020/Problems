// var array = [34,78,34,89,445,34];

function sumArray(array){
    var sum = 0;
    for(var i = 0; i<array.length; i++){
     sum = sum+array[i];
}return sum;
}
var array = [34,78,34,89,445,3505];
var result = sumArray(array);
var final = sumArray([34,7800,34,89,445,305]);
console.log(result);
console.log(final);
