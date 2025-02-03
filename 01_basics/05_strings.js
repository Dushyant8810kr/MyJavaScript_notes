const name = "Dushyant"
const repoCount = 10

// console.log(name + repoCount + "value"); // old method.

// console.log(`hllo my name is ${name}, and my repo count is ${repoCount}.`);// New method.****

const gameName = new String('Dushyant')
console.log(gameName[0]);//#1
console.log(gameName.__proto__);//#2    // isse hum string properties ko access kar pate hai..
console.log(gameName.length);//#3
console.log(gameName.toUpperCase());//#4
console.log(gameName.charAt(5));//#5
console.log(gameName.indexOf('t'));//#6
const newString = gameName.substring(0,4)//(0,4 ) are the indexes of the string.where the string can include the char. of string index from 0 to 3 ....  //#7
console.log(newString)

const anotherString = gameName.slice(-10,4)
console.log(anotherString);//#8

const newStringOne = "    dushyant    "
console.log(newStringOne);
console.log(newStringOne.trim());//#9  // this properties delete the uneven space.(it used in the input forms)***

const url = "https://www.dushyant.com/dushyant%20kumar"

console.log(url.replace('%20','-'));//#10 replace %20 to -                       *****
console.log(url.includes('crazy'));//#11 checks the keyword 'crazy' in the given things...                       *****
console.log(url.split('.'))







