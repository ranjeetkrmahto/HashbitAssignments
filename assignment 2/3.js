function findTax(salary) {
    let taxRate;
    let taxAmount;

    switch (true) {
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        case (salary > 1000000):
            taxRate = 0.2;
            break;
        case (salary > 500000):
            taxRate = 0.1;
            break;
        case (salary > 0):
            taxRate = 0;
            break;
        default:
            return "Invalid salary";
    }

    taxAmount = salary * taxRate;
    return taxAmount;
}

console.log(findTax(400000));
console.log(findTax(600000)); 
console.log(findTax(1200000));
console.log(findTax(2000000));
