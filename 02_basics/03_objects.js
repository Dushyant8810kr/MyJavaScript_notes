// objects can be declared by two types :: -- 1)by literal and 2) by constructor...

//agar object declare hoga by literals then object singlton nhi hoga and by constructor declare karenge to object singleton hoga.
//Singleton ka matlab hota hai ki apn jaise unique object..
// singleton
//object.create


// object literals
const mySym = Symbol("key1")


const JsUser = {
    // "name" : "dushyant",
    name :"Dushyant",
    "full name" : "Dushyant kumar",
    [mySym] : "myKey1",// symbol ko keys ki tarah act krane ke liye iss tarah karte hai...
    age : 20,
    location : "Delhi",
    email : "dushyantkr8810@gamil.com",
    isLoggedin : false,
    lastLoginDays : ["Monday","Saturday"]
}
//#1
// console.log(JsUser.email);

//#2
// console.log(JsUser["email"])

//#3
// console.log(JsUser["full name"]); // Doing this....Not this { console.log(JsUser.full name); } //because it shos error.

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);// they have type of string not symbol so use '[mySym ] : "myKey1",' in object to create this as symbol.. and also doing this "console.log(JsUser[mySym]);"

JsUser.email = "Dushyant2004@gamil.com"  // by this syntax we can change any value of any key by accesss them..



//agar tumhe object ki key ki value ko change nhi karna or use fixed karna hai to given below syntax ko follow karoo..
// Object.freeze(JsUser)
JsUser.email = "Dkkeh123@gail.com"
console.log(JsUser)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
JsUser.greeting = function(){
    console.log("hello js user.");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
