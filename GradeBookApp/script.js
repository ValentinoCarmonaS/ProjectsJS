function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
      sum += score;
    }
    return sum / scores.length;
}
  
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
  
console.log(getGrade(96)); //"A"
console.log(getGrade(82)); //"B"
console.log(getGrade(56)); //"F"

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(53)); // false
console.log(hasPassingGrade(87)); //true

function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade = getGrade(studentScore);

    if (hasPassingGrade(studentScore)) {
        return "Class average: " + avg + ". Your grade: " + grade + ". You passed the course."
    } else {
        return "Class average: " + avg + ". Your grade: " + grade + ". You failed the course."
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); // "Class average: 71.7. Your grade: F. You failed the course."