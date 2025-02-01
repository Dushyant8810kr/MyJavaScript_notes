// switch keyword

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("January")
        
        break;
    case 2:
        console.log("Feb")
        
        break;
    case 3:
        console.log("March")
        
        // break;  // agar break nhinlga rhega to jisse key match hui hai uske baad ka bhi code match kar dega warna except*** default...
    case 4:
        console.log("april")
        
        break;

    default:
        console.log("Don't match");
        
        break;
}
