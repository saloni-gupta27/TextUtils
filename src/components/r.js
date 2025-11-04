var a = 5;
function first() {
a = 6;
console.log(a);

}

console.log("from outside", a);

function second() {
console.log(a);

}
second();
