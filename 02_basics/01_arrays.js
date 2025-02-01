// Arrays

const myArr = [0,1,2,3,4,5] //#1
const myHeroes = ["Shaktiman","spiderman","Wolverine"] //#2
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);


//Array method
// myArr.push(6) // adding the value at the last of Array..
// myArr.push(7)
// myArr.pop() //delete/remove the item from last from the array..
// myArr.unshift(9) // add item in starting of the Array..
// myArr.shift() //delete item from starting from array

// console.log(myArr.includes(9));// they give the answer in boolean format.
// console.log(myArr.indexOf(3));


console.log(myArr);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

const newArr = myArr.join() // they changes the type of Array

console.log(myArr);
console.log(newArr);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)


const myn2 = myArr.splice(1,3) // by this property the original Array will change after execution/
console.log("c",myArr)
console.log(myn2);
