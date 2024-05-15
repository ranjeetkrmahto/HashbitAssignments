function countConsonantsAndVowels(str) {
    
    str = str.toLowerCase();

    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        
        if (vowels.includes(char)) {
            vowelCount++;
        }
       
        else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}


const str = "Hello, how are you doing today?";
const counts = countConsonantsAndVowels(str);
console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);
