var speech = "Hi my name is Arfin Chwodhury Arif.  I want to be good web developer.";

var count=0;
for(i = 0;i<speech.length;i++){
    var element = speech[i];
    if(element == " " && speech[i-1]!=" "){
        count++;
    }
}
count++;
console.log(count);