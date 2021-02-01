function leapyear(year){
    let remainder = year % 4; 
    return remainder;
}

let remainder = leapyear(2001);
if(remainder == 0){
    
    console.log("It's a leap year");
}else{
    console.log("It's not a leap year");
}