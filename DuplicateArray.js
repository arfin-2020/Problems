// var roll = [23,89,34,55,34,90,45,76];
// var result = roll.indexOf(760);
// console.log(result);

var id = [23,56,77,34,23,45,77,56,30,20];
var uniqueId = [];
for(var i = 0; i<id.length; i++){
    var element = id[i];
    var  index = uniqueId.indexOf(element);
    if(index == -1){
        uniqueId.push(element);
    }
}
console.log(uniqueId);