let userInput = prompt("Enter exactly five values separated by spaces:");

// Convert the input into an array
let arr = userInput.split(" ");

// Check if the user entered exactly five values
if (arr.length === 5) {
    // Reverse the array
    let reversedArr = arr.reverse();

    // Display the reversed array
    console.log("Reversed Array:", reversedArr);
    alert("Reversed Array: " + reversedArr.join(" "));
} else {
    alert("Please enter exactly five values!");
}