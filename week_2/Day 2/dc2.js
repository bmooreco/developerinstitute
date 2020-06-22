// excercise xp 
// let x = 5
// let y = 6 

// if (y>x) {
//     console.log("i completed");
// }

// excercise 2 dog will be Chihuahua

// let Newdog = "Chihuahua"
// let doglength = Newdog.length
// console.log(doglength)

// excercise 3
// let numString = prompt("put in a Number")
// let numNumb = Number(numString)
// if (numNumb % 2 == 0) {
// alert("Even Numbergood for you")
// } else {
//     alert("Odd Number")
// }
// excercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("no one online");
}
else if (users.length == 1) {
    console.log(users[0] + " is online");
}
else if (users.length == 2) {
    console.log(users[0] + " and " + users[1] + " are online");
}
else {
    console.log(users[0] + ", " + users[1] +  " & " + (users.length-2).toString() + " others are online");
}


