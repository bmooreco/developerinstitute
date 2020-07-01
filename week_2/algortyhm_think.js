// list of numbers or put it after the functions so you can keep changing the number array
//  the bgeest number, average and the total
// use a function to come up with the answer

// plan step 1) have the list 2) organize the list from smallest to biggest
//add all the numbers up to find total then divide by # for average

//let numbers = [1, 12, 0, 7, 7, 4, 10, 4, 5, 6, 5, 8 ,9, 2, 7, 11]


function biggest(numbers) {
   let biggest = numbers[0];
    // biggest = 0 if there is a negative number then biggest wont work
    for (number of numbers) {
        if (numbers > biggest){
            biggest = number;
        }
    }
    //console.log(biggest)
    return biggest
}

//let the_number = get_biggest([1, 12, 0, 7, 7, 4, 10, 4, 5, 6, 5, 8 ,9, 2, 7, 11])

function total (numbers){
    let total = 0;
    for (number = numbers){
        total+= number;
        return total
    }
}
function average(numbers){
    let total = 0;

    for(number of numbers){
    return total/numbers.length
}