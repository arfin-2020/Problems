// function rev(arr) {
//     let rev = [0];
//     for(let i=0; i<arr.length; i++){
//     let temp = arr[i];
//     rev = temp + rev;
//     }
//     return [rev];
//     }
//     var op = rev([1,2,3,4]);
//     console.log(op);

// function reverse(arr) {
// 	let result = [];
// 	for (let i = arr.length -1; i > -1; i--) {
// 		result.push(arr[i]);
// 	}
	
// 	return result;
// }
// let op = reverse([1,2,3,4,5,6]);
// console.log(op);

// function stringReverse(string){
//     var reverse = "";
//     for(var i = 0;i<string.length;i++){
//         var elements = string[i];
//         reverse = elements+reverse;
//     }return reverse;
// }
// var op = stringReverse("Hi my Name is Arif Chowdhury Arif");
// console.log(op);

// function arrayReverse(array){
//     var Reversenum = [];
//     for(i = 0; i<array.length; i++){
//         var element = array[i];
//         Reversenum = element+Reversenum;
//     }return [Reversenum];
// }
// var result = arrayReverse([34,56,89,34,89]);
// console.log(result);

function arrayReverse(array){
    var reverse=[];
    for(var i = array.length-1; i>-1; i--){
        reverse.push(array[i]);   
    }
    return reverse;
}
var result = arrayReverse([34,56,89,34,89]);
console.log(result);