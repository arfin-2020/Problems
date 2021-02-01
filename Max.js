var Businessman = 590;
var Minister = 990;
var sochib = 800;

// if(Businessman>Minister && Businessman>sochib){
//     console.log("Businessman is bigger than all.");
// }
// else if(Minister>Businessman &&  Minister>sochib){
//     console.log("Minister is bigger than all");
// }
// else{
//     console.log("Sochib is bigger than all");
// }

if(Businessman>Minister){
    if(Businessman>sochib){
        console.log("Businessman is bigger than all");
    }
    else{
        console.log("Sochib is bigger than all");
    }
}else{
    if(Minister>sochib){
        console.log("Minister is bigger");
    }else{
        console.log("Sochib is bigger than all");
    }
}