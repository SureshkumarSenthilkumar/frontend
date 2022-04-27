// local storage
// localStorage.setItem("email", "smms2919@gmail.com");
// document.writeln(localStorage.getItem("email"));

//session storage
// sessionStorage.setItem("email", "s.sk642129@gmail.com");
// document.writeln(sessionStorage.getItem("email"));

// let a;
// function login() {
//     const value =
//   a = 10;
//   localStorage.setItem("value", a);
//   sessionStorage.setItem("value", a);
// }
// function increment() {
//   a = a + 10;
//   localStorage.setItem("value", a);
//   sessionStorage.setItem("value", a);
//   console.log(`a after click ${a}`);
// }
// function logout() {
//   sessionStorage.clear();
//   localStorage.clear();
// }

// function first(callback) {
//   setTimeout(() => {
//     console.log("first executed");
//     callback();
//   }, 5000);
// }

// function second() {
//   setTimeout(() => {
//     console.log("second executed");
//   }, 2000);
// }
// first();
// second();
// first(second);

// console.log("hello");
// console.log(20 > 40 ? "hello" : "all");

// function test() {
//   console.log("first function");
//   function inner() {
//     console.log("second function");
//   }
//   return inner;
// }
// test()();

// new Promise(function (resolve, reject) {
//   if (10 > 11) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

let obj = {
  fname: "Suresh",
  lname: "kumar",
  email: "smms2919@gmail.com",
  hobbies: ["cricket", "football", "volleyball"],
  address: {
    village: "Odayakulam",
    city: "Coimbatore",
    state: "Tamilnadu",
  },
};

const jsonObject = JSON.stringify(obj);
console.log(jsonObject);

const javaScriptObject = JSON.parse(jsonObject);
console.log(javaScriptObject);
