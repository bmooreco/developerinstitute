//ask user to enter speed and print
// max speed is 100

let max_speed = 100;

let driver_answer = prompt("How fast are you driving?");
driver_answer = Number(driver_answer); 
// pasrseInt(driver_answer)

if (driver_answer > max_speed) {
	alert("too fast!");
} else {
	prompt("go faster");
};



