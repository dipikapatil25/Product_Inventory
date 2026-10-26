let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

let gradeMessage;

switch (grade) {
    case "A":
        gradeMessage = "Excellent";
        break;

    case "B":
        gradeMessage = "Very Good";
        break;

    case "C":
        gradeMessage = "Good";
        break;

    case "D":
        gradeMessage = "Average";
        break;

    default:
        gradeMessage = "Needs Improvement";
}

let status = score >= 60 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);