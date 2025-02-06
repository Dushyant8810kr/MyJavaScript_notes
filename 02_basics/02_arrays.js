const marvelHeros = ["thor","ironamn","spiderman"]
const dcHeros = ["superman","flash","batman"]

// marvelHeros.push(dcHeros) // they have some issues (they don't merge)....

// console.log(marvelHeros);// In this case we insert 'dcHeros' Array in 'marvelHeros' array then the 'dcHeros' can add as an item in 'marvelHeros' Array..
// console.log(marvelHeros[3][1]);

// #1  ::----
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);  // by conatination property we can merge two array together..

// #2  :::---
// It is an another way of merging two or more array together..
const all_new_hros = [...marvelHeros,...dcHeros] //spread operator "..."

// #3

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // iss property se hum array ke andar ke items ko easily spreadout kar sakte hai...


const real_another_array = another_array.flat(Infinity)//ifinity ki jagah hum koi no. bhi likh sakte hai ki kitna array ko spread karna hai.
console.log(real_another_array)



//#4 converting into array..
console.log(Array.isArray("Dushyant"));// iska output boolean mai ayega (true/false)
console.log(Array.from("Dushyant"));// ye kisi bhi value ko array mai convert kar dega.
console.log(Array.from({name : "Dushyant"})); // interesting Question*******//iska output empty array ata hai. isme hme specify karna padta hai ki hme keys ka array banana hai ya values ka..



// example:-
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //Returns a new array from a set of elements.
