// var a = 10;
// var b = 20;
// console.log("Before swapping a = ",a, "b = ",b);

// // temp = a;
// // a = b;
// // b = temp;

// // a = a+b; //a = 30
// // b = a-b; //b = 30-20 = 10
// // a = a-b; //a = 30-10 = 20

// [a,b] = [b,a];
// console.log("After swapping a = ",a, "b = ",b);


function add(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if ( numbers[i] % 2 == 0) {
      sum = sum + numbers[i];
      
    }
    
  }
  return sum;
}
var array = [1, 2, 3, 4, 5,6,6];
var result = add(array);
console.log(result);
