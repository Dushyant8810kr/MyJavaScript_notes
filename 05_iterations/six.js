const coding = ["javascript","ruby","Python","java","c++"]

const values = coding.forEach((item) => {
    // console.log(item); // 'forEach doesn't return any thing they return undefined..
    return item
    
})

// console.log(values);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
//     return num>4   ; // here in this line the imp concept is that return key word is used because of scope{}....
// })
// console.log(newNums);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newNums = []

myNums.forEach((nums)=>{
    if (nums>4){
        newNums.push(nums)
    }

})

console.log(newNums);



