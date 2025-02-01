const userEmail = "d@Dushyant.ai"

if (userEmail) {
    console.log("Got user email");
    
}
else {
    console.log("Don't have user email.");
}


// falsy value 

// false ,0 ,-0 , BigInt 0n , "" , null , undefined , NaN   :------------- all are the falsy value they return 'false' ....



//truthy values :-----
// "0" , "false" , " " , [] , {} , function(){}


// example :----------
const emptyObj = {}
 if (Object.keys(emptyObj).length ===0){
    console.log("object is empty")
}


// Nullish coslescing operator (??) : null ,defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // null ke just baasd wali hi hogi execute ..


// console.log(val1);



// terniary operator :----

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice  <= 80 ? console.log("less tahn 80") : console.log("More than 80");

