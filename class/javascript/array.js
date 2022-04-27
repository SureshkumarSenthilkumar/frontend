let num = 23;
let numCopy = num;

console.log(num, numCopy);

let arr1 = [1, 4, 5, 6, 7, 2, 8];
let arr1Copy = arr1; // this case both arr and arrCopy are referning same memory area
arr1Copy.push(35);
console.log(arr1, arr1Copy);
/// this is shallow copy first layer of array or object will be copied
let arr2 = [1, 4, 6, 2, 6, 9, 0];
let arr2Copy = [...arr2]; // here the address will be differnet
arr2Copy.push(3);
console.log(arr2, arr2Copy);

let person1 = {
  personName: "Vinay",
  personAge: 21,
  personPercentage: "25%",
};

let person1Copy = person1;
person1.personName = "Rahul";

console.log(person1, person1Copy);

let person2 = {
  personName: "Ram",
  personAge: 24,
  personPercentage: "34%",
};

let person2Copy = { ...person2 };
person2.personAge = 25;
person2.phoneNumber = 9982224242;
console.log(person2, person2Copy);

let movie = {
  hero: "Vijay",
  heroine: "Pooja",
  director: "Nelson",
  producer: "sunPictures",
  details: {
    budget: 10,
    collecion: 2,
    days: 3,
  },
};

let movie1Copy = movie;
movie.hero = "dhanush";
movie.details.budget = 12;

console.log(movie, movie1Copy);

let movie2Copy = { ...movie };
movie.hero = "ajith";
movie.details.budget = 13;

console.log(movie, movie2Copy);

function addNumbers(...nums) {
  let sum = 0;
  console.log(typeof nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(`sum ${sum}`);
}
addNumbers(1, 3, 6);
addNumbers(4, 6);
addNumbers(5, 4, 3, 7, 2);

let obj = {
  name1: "sansith",
  age: 21,
  id: "tyss",
};

const { name1, age, id } = obj;

console.log(obj.name1);
console.log(name1);

const hobbies = ["dancing", "singing", "swimming", "traveling"];
const [hobby1, hobby2, hobby3, hobby4] = hobbies;

console.log(`hobby1- ${hobby1}`);
console.log(`hobby2- ${hobby2}`);
console.log(`hobby3- ${hobby3}`);

var a = 23;
console.log(window.document);
console.log(window.history);
console.log(window.navigator);
navigator.geolocation.getCurrentPosition((loc) => {
  console.log("location", loc);
});

console.log(this == window);
function add() {
  console.log(this);
}
add();

let person3 = {
  name: "Hrithik",
  age: 5,
  sal: function add() {
    console.log(this);
  },
};
