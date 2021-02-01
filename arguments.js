function add() {
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];

        sum = sum + element;
    }
    return sum;
}
var result = add(34, 34, 64, 748, 84);
console.log(result);