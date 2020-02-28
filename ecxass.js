// //write a js program to convert temp from celcuis to farenheit and viceversa
// var tempC  = prompt("input number in celcuis");
// let farC = (tempC * (9/5)) + 32;
// console.log(farC + "F");

// var tempF  = prompt("input number in farenheit");
// let farF = (tempF - 32) * (5/9);
// console.log(farF + "C");


// // write a js program to check if three given integer values are in d range 1-50(inclusive),return true if one or more is in d said range otherwise return false
// for(let i = 1; i <= 50; i++) {
    
// }




// let count = 0
// let name = "antananarivo";
// for (i = 0; i < name.length; i++) {
//     if (name[i] === "a") {
//         console.log(name[i])
//         count += 1;
//     }
//     console.log(name[i])
// }




// write a function to add d values in a given array
//input: [1, 2, 3]
//output:6
let arr = [1, 2, 3, 5]
for (let i = 0; i < arr.length; i ++) {
    array = arr[i]
    array += array 
}
console.log(array);

//write an asynchronous function using async/ await in a try/ catch block that converts a string to a number or resolves the error if any occurs
function sd(query) {
    try{
        book = parseInt(query);
        console.log(book);
    }
    catch(error){
        console.log("this is an error")
    }
}
sd()

function lo(alp) {
    try{
        lower = alp.toLowerCase()
        console.log(lower)
    }
    catch(error){
        console.log(error)
    }
}
lo()