const coding =["js","rb","py","java","cpp"]


//#1
// coding.forEach( function (language){
//     console.log(language)

// })


//#2
// coding.forEach((item)=>{
//     console.log(item);
    
// })



//#3
// function printMe(item){
//     console.log(item);
// }


// coding.forEach(printMe)



//#4
// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })


//#5
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})