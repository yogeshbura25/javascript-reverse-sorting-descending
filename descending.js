function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const inputArray = [15, 7, 3, 25, 18, 11]; 
const sortedArray = sortDescending(inputArray);
console.log("Sorted array in descending order:", sortedArray);
