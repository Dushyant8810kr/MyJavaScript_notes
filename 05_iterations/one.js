// for :---------------


//Example 1 :----
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log("5 is the best number.");
        
//     }
//     console.log(i);
// }


// Example 2 :-------
// for (let i = 0; i <= 10; i++) {
//     console.log(`Ouetr loop value : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//         }
// }



// Example 3 :------

let myArray = ["flash","BAtman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}


// break and continue..
// for (let i = 0; i <=20; i++) {
//     if (i==5) {
//         console.log(`Detected 5`);   // break pure loop se  har kar deta hai condition ke according....
//         break;
        
//     }
//     console.log(`value of i is ${i}`);
    
// }



for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log(`Detected 5`);   // continue jis pe condition lagai hai use print nhi kareega baki saab ko kar dega...
        continue;
        
    }
    console.log(`value of i is ${i}`);
    
}