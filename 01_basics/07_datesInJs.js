// Dates

//imp thing :- Date is an object.


/*
let myDate = new Date()

console.log(myDate);//#1
console.log(myDate.toString());//#2
console.log(myDate.toDateString());//#3
console.log(myDate.toISOString());//#4
console.log(myDate.toJSON());//#5
console.log(myDate.toLocaleDateString());//#6
console.log(myDate.toLocaleString());//#7

console.log(typeof myDate)

Output::===>>>>>
2025-01-04T13:37:20.897Z
Sat Jan 04 2025 19:07:20 GMT+0530 (India Standard Time)
Sat Jan 04 2025
2025-01-04T13:37:20.897Z
2025-01-04T13:37:20.897Z
4/1/2025
4/1/2025, 7:07:20

*/



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// js mai months "0" se start hote hai
// let myCreateDate = new Date(2023,0,23)  //#1
// let myCreateDate = new Date(2023,0,23,5,3)  //#2
// let myCreateDate = new Date("2023-01-14")  //#3 (not prefer in india)
// let myCreateDate = new Date("01-14-2023")  //#4 (prefer in india)

// console.log(myCreateDate.toLocaleString())

// let myTimeStamp = Date.now() //**********

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay())

// `${newDate.getDay()}`


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// important
newDate.toLocaleString('default',{
    weekday : "long",
    timeZone

})


