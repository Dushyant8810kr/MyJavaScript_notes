//function ::::------

function sayMyName (){
    console.log("D");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("T");
    
}

// sayMyName()


// Example 1 :::::------

// function addTwoNumbers(number1,number2){ // here number1 , number2 are the parameters..

//     console.log(number1+number2);

// }

// addTwoNumbers(3,5) // 3, 4 are the arguments..


// Example 2 ::::------
function addTwoNumbers(number1,number2){ // number1,number2 are the parameter.
    // let result = number1 + number2
    // return result

    return number1 + number2

}

const result = addTwoNumbers(3,5)//3,5 are the argument.
// console.log("Result: ",result)


// Example 3:-

function loginUserMessage(username){
    if(username === undefined){ // if(!username) another way.. to doing that
        console.log("Please Enter your username...");

        return
        
    }
    return `${username} just logged in.`

}

console.log(loginUserMessage()) // if i dont pass any value then the answer in "undefined"...



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Imp thing (in future) ::::-----
function calculateCartPrice(val1,val2,...num1){ // '...' refers to "rest operator"
    return num1

}

console.log(calculateCartPrice(200,300,400,6000));

// output :::---
// [ 400, 6000 ]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// how an object is passed from function...

const user = {
    username : "Dushyant",
    price : 199,
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//#1
// handleObject(user)


//#2
handleObject({
    username : "Dushyant",
    price : 399, 
})

const myNewArray = [200,400,600]

function returnSecondValue(getArrayValue){
    return getArrayValue[1]
}

// #1
// console.log(returnSecondValue(myNewArray));

// #2
console.log(returnSecondValue([100,200,300,400,500,1000,199]));






