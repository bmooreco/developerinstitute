// let address = "6680 E Virg";
// let zip = "80220";
// let country = "USA";

// let address_usa = ("i live here"+address+zip+country) 
// 	console.log (address_usa);


// let text ="finding nemo in my computer"
// console.log(text.indexOf("nemo"));

// for (i = 0; i =< text.length; i ++) {
// 	console.log (text[i])
// }


// 1. Create a function called shopping, that takes 1 parameter --> Array
// 2. Inside the function, you have to go through the array and console.log each fruit that you bought
// 3. Call the function

// 4. Add 2 new parameters --> currency and amount of money
// 5. Mutiply the amount of money by 3.50 
// 6. Console log the amount you paid and the currency



function shopping (shoppinglist, currency, money) {
for (fruit of shoppinglist) {
	console.log(fruit)
}
money *= 3.5
console.log(" I spent" + money + currency)
}

//shopping (x,y,z)


shopping (["apples", "banana", "pear"], "$", 150)