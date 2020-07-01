
// // 1. Loop through the array of object
// // 2. If the username is Sarah : say hello to her friends (display the name of her friends)
// // 3. If the username is Dan : change his password to 567
// // ​
// // --> can use switch
// // --> for in or for of
// // ​
// ​
// let users = [
//     {
//         username: "Sarah",
//         password: 123,
//         friends: ["max", "tom"]
//     },
//     {
//         username: "Dan",
//         password: 433
//     }
// ]
// Collapse

// for (let person of users) {
//     if (person.username === "Sarah") {
//         console.log("My friends are ", person.friends[0], person.friends[1])
//         console.log("My password is", person.password)
//     }
// }
// Collapse

// for (let i in users) {
//     if (users[i].username === "Sarah") {
//         console.log("My friends are ", users[i].friends[0], users[i].friends[1])
//         console.log("My password is", users[i].password)
//     }
// }

//  XP 1
// let colors = ["blue," "green", "yellow", "red", "purple"]
// for (item of colors) {
//     console.log ("my 1st choice is " + item)
// }

// bonus

// let colors = ["blue", "green", "yellow", "red", "purple"]
// for (i in colors) {
//     console.log("my #" + (parseInt(i+1)) +"color is" + colors[i]);
// }

// XP 2

let names = [ "jack", "philip", "sarah", "amanda", "bernard", "kyle"];
let sorted_names = names.sort();

console.log(sorted_names);

// console.log(names)

let secret = ""
for (name of names){
   secret += name.charAt(0)
}