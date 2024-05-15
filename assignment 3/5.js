function correctWord(sentence, wrong, correct) {
    
    const regex = new RegExp('\\b' + wrong + '\\b', 'gi');

    const correctedSentence = sentence.replace(regex, correct);

    return correctedSentence;
}

const sentence = "I love programming, progamming is my passion.";
const correctedSentence = correctWord(sentence, "progamming", "programming");
console.log(correctedSentence); 