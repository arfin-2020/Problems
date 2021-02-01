
function animalCalculator(depth){
    var animal = 0;
    if(depth<=10){
        animal = depth*50;
    }
    else if(depth<=20){
        var first10Meter = 10*50;
        var remaining = depth-10;
        var second20Meter = remaining*100;
        animal = first10Meter+second20Meter;
    }
    else{
        var first10Meter = 10*50;
        var second20Meter = 10*100;
        var remaining = depth-20;
        var third30Meter = remaining*300;
        animal = first10Meter+second20Meter+third30Meter;
    }
    return animal;
}
var result = animalCalculator(17);
console.log(result);