const score = 400//#1
// console.log(score);

const balance = new Number(100)//#2
// console.log(balance);

// console.log(balance.toString().length);//#3

// console.log(balance.toFixed(1));//#4


// #5
const otherNumber = 123.89666
// console.log(otherNumber.toPrecision(4));


// #6
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++
// methods....

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,9,1,6));
// console.log(Math.max(4,9,1,6));

console.log(Math.random());// they give the value between 0 and 1 randomly ,0 and 1 inluded.....
console.log((Math.random()*10) + 1); // we add 1 at the last because '(Math.random()*10)' may or maynot gives 0(We nee 1 as min. value..)
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));











