// singleton or constructor..

// const tinderUser = new Object()  // sinleton object..


const tinderUser = {} // non singleton object...
tinderUser.id ="123abc"
tinderUser.name = "Dushyant"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regualrUser = {
    email : "Dushyantkr2004@gamil.com",
    fullname:{
        firstname:"Dushyant",
        lastname : "Kumar"

    }

}

// console.log(regualrUser.fullname.firstname);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"c" ,4:"d"}

//#1
// const obj3 = {obj1,obj2}  // this thing have problem not in syntax but jo hme chaiye vo answer nhi aa rha hai isse.

// #2
// const obj3 = Object.assign(obj1,obj2) // by this we can merge objects..

// #3
// const obj3 = Object.assign({},obj1,obj2) // but we can use this one 

//#4
const obj3 ={...obj1,...obj2} //90% time isse hii use karngee...

// #5
const user = [
    {
        id : "user@1"
    },
    {
        id : "user@2"
    },
    {
        id : "user@3"
    }
]
// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // they answer in boolean.   


// console.log(obj3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object destructure::::-------

const course = {

    price:999,
    courseInstructor:"Dushyant",
}
// #1
// console.log(course.courseInstructor);


// #2
const {courseInstructor : instruture} = course

console.log(instruture)

// json API ::::-------

// API ka matlab simple hindi mai ye hota hai ki apna kaam dusr ke saar pe daal dena....


// {
//     "name" : "Dushyant",

// }







