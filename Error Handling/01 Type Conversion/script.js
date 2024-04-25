function convertToNumber(inputString) {
    try {
        
        const parsedNumber = parseFloat(inputString);
        
        
        if (Number.isNaN(parsedNumber)) {
            return "Invalid number";
        }
        
        
        return parsedNumber;
    } catch (error) {
        
        return "Invalid number";
    }
}

// Example usage:
console.log(convertToNumber("123")); 
console.log(convertToNumber("Hello")); 
