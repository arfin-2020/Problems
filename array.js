// friendsAge = [15,78,34,84,20,85];

// friendsAge = friendsAge[2];
// console.log(friendsAge.indexOf(85));
// friendsAge[1]=100;
// // console.log(friendsAge[2]);
// console.log(friendsAge);
// friendsAge = [15,78,34,84,20];
// // friendsAge.shift();
// // friendsAge.push(15,56,89);
// friendsAge.unshift(20,30,40);
// console.log(friendsAge);

// var studentsList = ["Arfin", "palam","salam","kalam","korim","monni","shila","Arif" ];
// var mainstudestshow=studentsList.slice(2,6);
// console.log(mainstudestshow);
// console.log(studentsList);

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// var studentsList = ["Arfin", "palam","salam","kalam","korim","monni","shila" ];
// deletedlist = studentsList.splice(2,3);
// console.log(deletedlist);
// // console.log(studentsList);
// var studentsList = ["Arfin", "palam","salam","kalam","korim","monni","shila","Arif" ];
// for(var i=0;i<studentsList.length;i++){
//     var element = studentsList[i];
//     console.log(i);
// }

// var studentsList = ["Arfin", "palam","salam","kalam","korim","monni","shila","Arif" ];
// for(var i=0;i<studentsList.length;i++){
// // var element = studentsList[i];
// console.log(i);
// }

// var numbers = [1,2,3,4,5];

// var result = numbers.slice(-1,3);

// console.log(result)

function add(numbers) {
  var sum = 0;
  for (var i = 0; i <= numbers; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
var result = add(5);
console.log(result);
