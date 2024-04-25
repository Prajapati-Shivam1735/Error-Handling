class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calculatorInstance = new Calculator();

const result = calculatorInstance.add(5, 10);
console.log(result);
