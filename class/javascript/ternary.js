var x = 2 > 3 ? "hello" : 3 < 2 ? "all" : "world";
console.log(x);
console.log(3 > 2 >= 1);
var a = 2.6 + 1.3;
var b = 3.9;
console.log(typeof a);
console.log(typeof b);
console.log(a == b);
console.log(2.5 == 2.5);

function getName(a, b) {
  console.log(a + b);
}

getName("hello", "all");
getName(4, 5);

var getName = function () {
  console.log("Anonyomous function");
};

getName();

var getName = function () {
  console.log("Immediate invoked function");
};
getName();

function getName() {
  return "kumar";
}
console.log(getName());
function joinName(lastName) {
  console.log("Suresh " + lastName);
}

joinName(getName());
