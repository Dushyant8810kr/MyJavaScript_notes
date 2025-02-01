const user = {
    username: "Dushyant",
    price : 199,

    welcomeMessage :function(){
        console.log(`${this/*.username*/},welcome to webbsite.`);
        
    }
}

// user.welcomeMessage()
// user.username = "YuktiMalhotra"
// user.welcomeMessage()

// console.log(this);// imp** the output of this line of code is an "Empty object" ...{}
// Browser ke andar jo window object hai vo window object hai.......Imp thing****


// #1
// function chai() {
//     let username = "Dushyant"
//     console.log(this.username);// In function We dont use the 'this.username' type things.But they can be use in Objects...Output of this thing is ''undefined''
// }
// chai()



// #2
// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai() // they have same output as upper block of code..



// #3
// const chai = () => {
//         let username = "hitesh"
//         console.log(this.username)
//     }

// chai()



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//#1
// const addTwo = (num1,num2) =>{ //  arrow function..
//     return num1 + num2
// }

// console.log(addTwo(3,4))


//#2
// const addTwo = (num1,num2) => num1 + num2

// #3
// const addTwo = (num1,num2) => (num1 + num2)

//#4
const addTwo = (num1,num2) => ({username : "Dushyant"})



console.log(addTwo(3,4))

