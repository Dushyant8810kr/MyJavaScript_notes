// if

const isUserLoggedIn =  true              // is type se bhi hum likh sakte hai direct true na likh kar..

if (isUserLoggedIn){              // Agar true hoga tabhi if ke qandar ka code execute hoga..
                        // Ab hum har jagah true to likhenge nhi to hum comparision statement likhte he.. like :- (2==2),etc.


}



// comparison conditions  :::::-----    < , > , <= , >= , == , != , === ,!== 
// at the end agar hme if ke andr ke code ko execute karna hai to hme aise comparision conditions likhne honge jo true return kare ... like :- (3!=2),etc..


// example 1 ::---------
if (2=="2"){                                    // "==" double equal data type check nhi karta isliye ye wala code execute hoo paya..
    // console.log("executed");                    // "===" agar hum triple equal or strictly equal se karenge to ye Data Type bhi check karega jo hme iss code ke according false dega
    
}

// Example 2 :----

// const temperature = 30

// if (temperature < 50){
//     console.log("less then 50");
// }
// else{
//     console.log("temperature is greater than 50.")
// }



//Example 3 :-----------

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User Power : ${power}`)

// }
// console.log(`User Power : ${power}`) // iss block of code mai error ayega "scope" wala .. kyoki hmne power ko if ke scope mai power ko declare kiya hai na ki global scope mai..(imp. thing is that hmne if ke andar jo power hai use const keyword ke according declare kiya hai..agar  hum "const" ki jagah 'var' ko use karte hai to hme koi error show nhi hota kyoki var if ke anadr wale power ko global variable bna deta hai..)



// Example for short hand notation  of "if-else" ::----
// const balance = 1000

// if (balance >500) console.log('test'),console.log("test2");  // but this syntax is not preferrable... beacause ye code readable nhhi hai..




// example of nested if else :------

// const balance = 1000

// if (balance <500){
//     console.log("balance is less than 500");
    
// }
// else if (balance <750) {
//     console.log("balance is less than 750");
// }
// else if (balance <900) {
//     console.log("balance is less than 900");
// }
// else {
//     console.log("balance is less than 1200");
// }


// Example :---------------------

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard  ) {                                // '&&' this signs means "and" which allows that all condition should be true for
                                                                  // for execution...
    console.log("Allow to buy course.");
    
}
if (loggedInFromEmail || loggedInFromGoogle){
    console.log('User logged in');                                // '||' this signs means "or" which allows that ya to ye wala hoga ya ye    
                                                                  // wala bass ek condition true hoo jaye to execution hoo jata hai
}