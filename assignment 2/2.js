function calculate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operation";
    }
}


console.log(calculate(5, 3, 'add'));
console.log(calculate(5, 3, 'subtract'));
console.log(calculate(5, 3, 'multiply'));
console.log(calculate(6, 2, 'divide')); 
console.log(calculate(5, 0, 'divide')); 
console.log(calculate(5, 3, 'power')); 
