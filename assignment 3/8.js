function repeatedSumOfDigits(num) {
    
    let strNum = num.toString();

    
    while (strNum.length > 1) {
        
        let sum = 0;
        for (let digit of strNum) {
            sum += parseInt(digit);
        }

        
        strNum = sum.toString();
    }

    
    return parseInt(strNum);
}


console.log(repeatedSumOfDigits(456)); // Output: 6
