function reverseString(str) {
    
    const characters = str.split('');

    
    const reversedCharacters = characters.reverse();

    
    const reversedString = reversedCharacters.join('');

    return reversedString;
}


const input = "Hello";
console.log(reverseString(input)); 