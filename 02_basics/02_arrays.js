const marvelHeros = ["thor","ironamn","spiderman"]
const dcHeros = ["superman","flash",]

// marvelHeros.push(dcHeros) // they have som issues....

// console.log(marvelHeros);// In this case we insert 'dcHeros' Array in 'marvelHeros' array then the 'dcHeros' can add as an item in 'marvelHeros' Array..
// console.log(marvelHeros[3][1]);

// #1  ::----
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);  // by conatination property we can merge two array together..

// #2  :::---
// It is an another way of merging two or more array together..
const all_new_hros = [...marvelHeros,...dcHeros]

// #3

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



//#4 converting into array..
console.log(Array.isArray("Dushyant"));
console.log(Array.from("Dushyant"));
console.log(Array.from({name : "Dushyant"})); // interesting Question*******


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
