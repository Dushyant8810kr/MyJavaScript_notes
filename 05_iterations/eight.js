const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} and currval : ${currVal}`);
//     return acc + currVal

// },0)


const myTotal = myNums.reduce((acc,curr) => acc + curr ,0)

console.log(myTotal);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myShoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 6999
    },
    {
        itemName : "Data science course",
        price : 5999
    }
]

const priceToPay = myShoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(priceToPay);

