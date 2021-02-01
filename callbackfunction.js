// function call_back(name,age,work){
//     console.log("My name is:",name);
//     console.log("My age is:",age);
//     console.log("It's time to reading.",work);


// }

// call_back("Arfin Chwodhury Arif",23,"working");



// function call_back(name,time){
//     console.log("My name is Arfin Chowdhury Arif",name);
//     console.log("My time",time);
//     // working_date();
// }
// function working_date(date){
// console.log("My working date:",date);
// }
// call_back("Arfin Chowhury Arif",34, working_date);
// working_date("25-Jan-2021");


function explain_callback(name, age, task, mask) {
    console.log("Name", name);
    console.log("your age", age);
    console.log("were", task);
    mask();
}

function BuyWashing_Machine() {
    console.log("Now you can buy Washing Machine.");
}

function washHand() {
    console.log("wash hand with soap");
}

function takeShower() {
    console.log("Take Shower");
}
explain_callback("Arfin Chowdhury Arif", 24, "don't ware", washHand);
explain_callback("Arif", 14, "don't ware", takeShower);
explain_callback("Arfin Chowdhury hero", 34, "ware", BuyWashing_Machine);