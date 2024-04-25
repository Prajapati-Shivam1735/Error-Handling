function getPerson(personObj) {
    try {
        // Check if the input is a valid object with "name" and "age" properties
        if (typeof personObj !== 'object' || !personObj.hasOwnProperty('name') || !personObj.hasOwnProperty('age')) {
            throw new Error("Invalid parameter type");
        }
        
        // Construct the result string
        const result = `Name: ${personObj.name}, Age: ${personObj.age}`;
        return result;
    } catch (error) {
        return error.message; // Return the error message
    }
}

console.log(getPerson({ name: "Mithun", age: 20 })); 
console.log(getPerson({name : "Mithun"})); 
console.log(getPerson(["name","Mithun"])); 
