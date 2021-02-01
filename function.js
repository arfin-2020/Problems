//  ages = [23, 56, 89, 38, 90];
//  for (let i = 0; i < ages.length; i++) {
//      const element = ages[i];
//      if (element % 2 == 0) {
//          console.log(element, ":is even number");
//      } else {
//          console.log(element * 2, ":is odd number");
//      }
//  }

// here using functions

// function query(element) {
//     if (element % 2 == 0) {
//         console.log(element, ":is even number");
//     } else {
//         console.log(element * 2, ":is odd number");
//     }
// }

// ages = [23, 56, 89, 38, 90];
// for (let i = 0; i < ages.length; i++) {
//     const element = ages[i];
//     query(element);
// }


//here using more function

// function query(num) {
//     for (let i = 0; i < num.length; i++) {
//         const element = num[i];
//         if (element % 2 == 0) {
//             console.log(element, ":is even number");
//         } else {
//             console.log(element * 2, ":is odd number");
//         }
//     }
// }
// query([23, 56, 89, 38, 90]);
// query([30, 61, 9, 84, 10]);


// function query(num) {
//     for (var i = 0; i < num.length; i++) {
//         if (num[i] % 2 == 0) {

//         } else {

//         }
//         return num[i];
//     }

// }
// var result = query([21, 66, 86, 80, 90]);
// console.log(result);

function query(ages) {
    var faka = [];
    for (let i = 0; i < ages.length; i++) {
        const element = ages[i];
        if (element % 2 == 0) {
            faka.push(element);
        } else {

        }
    }
    return faka;
}

var result = query([66, 86, 80, 90, 90, 7, 45, 89]);
console.log(result);