// Immediately invoked function Expressions (IIFE)

//#1
// function chai(){
//     console.log(`DB connected`);
// }
// chai()


// #2
(function chai(){
    console.log(`DB connected`);
})();

// ()(); // IIFE ko use karne ka ye reason hai ki global scope ke variable se hme koi dikkat na hoo execution ke samay ....aur ek imp thing ye hai ki
//last mai hum ek semicolon " ; " lga rhe hai kyoki uss block of code ko hum end karna cha rhe hai nhi to baad mai dusre code ke saath dikkat hoo sakti hai..

//#3
( function aurCode(){
    console.log("Db CONNECTED TWO");//aurCode is a named IIFE...
    }
)();

//#4
( (name) => {
    console.log(`Db CONNECTED TWO ${name}`);
    }
)('Dushyant');






