const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const output = students.map(student => {
    const scores = Object.values(student)[0]; 
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const average = totalScore / Object.keys(scores).length; 
    return { average }; 
});

console.log(output);
