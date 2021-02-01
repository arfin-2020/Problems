var marks = [45,54,83,24,90,43,80,23,100];
var max = [0];
for(var i = 0; i < marks.length;i++){
        var element = marks[i];
        console.log(element);
        if(element>max){
            max = element;
        }
}
console.log(max);