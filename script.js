//Named function
function topla(a, b) {
    return a + b;
}
console.log(topla(2, 3));


//Anonymous function
const vur = function (a, b) {
    return a * b;
};
console.log(vur(4, 5));


//Arrow function
const bol = (a, b) => a / b;
console.log(bol(8, 2));


//Callback function
function cix(a, b, callback) {
    const netice = a - b;
    callback(netice);
}
cix(4, 3, function (netice) {
    console.log(netice);
});