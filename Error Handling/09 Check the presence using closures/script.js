function numberChecker(numbers) {
    
    const numberSet = new Set(numbers);

    return function checkNumber(num) {
        return numberSet.has(num);
    };
}


const myArray = [1, 2, 3, 5, 8];
const checkMyNumber = numberChecker(myArray);

console.log(checkMyNumber(3)); 
console.log(checkMyNumber(6)); 
