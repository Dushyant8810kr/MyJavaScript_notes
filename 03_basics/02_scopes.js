let a = 10
const b = 20
var c = 30

// { } ye object nhi hai lekin object ki tarah dikh rha hai ise object hone ke liye variable declaration ki jarurat padti hai.. Jab ye sign function wagerah mai use hota hai to ise "scope" khete hai...

if (true) { 
    let a = 10 
    const b = 20
    var c = 30
}
// if ke andar jo likha hai use block scope kehte hai..and if ke bhar wala code jo likha hai use hum global scope ... the block scope does not interfare with the global scope and vice-versa 

// console.log(a);
// console.log(b);
// console.log(c);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "Dushyant"

    function two(){
        const website = "Youtube"
        // console.log(username)
    }
    // console.log(website);

    two()

}

// one()

if (true){
    const username = "Dushyant "
    if (username === "Dushyant "){
        const website = "Youtube"
        // console.log(username + website)
    }
    // console.log(website) showing error!!!!
}
// console.log(username)


//++++++++++++++++++++++++++++++++++++++++++++++++++interesting ++++++++++++++++++++++++++++++
console.log(addOne(5))// dont showing an error because we can access 'addOne' before in this type of method of defining a function
function addOne(num){ // #1 method to define a function...
    return num + 1
}
// console.log(addOne(5))


// addTwo(5) showing an error !!!{Cannot access 'addTwo' before initialization}
const addTwo = function(num){ // #2 method to define a function...
    return num + 2
}
// addTwo(5)

