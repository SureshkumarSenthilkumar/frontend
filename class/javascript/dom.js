const element1 = document.getElementById("h1tag");
element1.innerText = "Hello JavaScript";
element1.style.color = "red";

const element2 = document.getElementById("ptag");
element2.innerText = "Hello all.. I am currently in Bangalore";

element2.style.color = "orange";

let element3 = document.createElement("h2");
element3.innerHTML = "Hello all... I am from Coimbatore";
document.body.appendChild(element3);
console.log(document);

let element4 = document.createElement("button");
element4.innerText = "Click here";
element4.style.color = "Blue";
document.body.appendChild(element4);

const element5 = document.getElementsByClassName("test")[0];
element5.style.color = "blue";
