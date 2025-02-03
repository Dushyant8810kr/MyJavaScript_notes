// kis tarah se data ko memory mai rakha jata hai or use kis tarah access kiya jata hai iss bases pe datatype ko 2 category mai baata gaya hai 
//1.primitive ,2. non-primitive.

//  Primitive
// 7 types : string,Number,Boolean,null(empty),undefined(memory space declare hai lekin value put in nhi kari),symbol,BigInt.

// QUE:- is js is dynamically typed or statically type?
// ANS:-js is dynamically type, because at the time of defining some variable we can't define the datatype ,js can tells/interpretate autonomously the type of the variable .
//Example:-
// 1. const score =100 /*js can tells autonomously the type of this variable is type of Number.  */
// 1. const isLoggedIn =false /*js can tells autonomously the type of this variable is type of Boolean.  */


//Example of symbol:-
// const id=Symbol('123')
// const anotherId =Symbol('123')
// console.log(id===anotherId);
// output:-
// false


//Example og bigInt :-
// const bigNumber = 38476482987347648n


// Reference (Non primitive) :-

// Array,objects,functions.
//*****the datatype of Non primitive is (function).

const heroes=["shaktiman","spiderman","batman"]  //Example of Array...
let myObj={
    name:"Dushyant",//example of Object
    age:20,         //curlybrases ke andar jo hai vo object hai.
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj);    // this line of code tells that the type of variable ..


/*Important things::::---

Return types of variables in javascript.

1)Primitive Datatypes:-

Number => number
String => string
Boolean => boolean 
null => object    ***
undefined => Undefined
symbol => symbol
BigInt => bigint

2)Non-primitive Datatypes:-
Arrays => object   ***
Function => function
Object => object

*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive)((jo bhi hum variable declare karte hai uska hme copy milta hai)) , Heap(non primitive)((isme variable ka original reference milta hai..))

// Example::--
let myYoutubeName = "crazyshorts"

let anotherName = myYoutubeName
anotherName = "rizz"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl",
}

let userTwo = userOne
userTwo.email = "dushyantkr8810@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

