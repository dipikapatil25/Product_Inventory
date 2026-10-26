function calculateArea(length = 5, width = 4) {
    let area = length * width;
    return area;
}


const arrowArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Standard Function Area (Default 5x4):",
    calculateArea()
);

console.log(
    "Arrow Function Area (Custom 10x3):",
    arrowArea(10, 3)
);

function scopeExample() {
    let functionVar = "Inside Function";
    console.log(functionVar);
}

scopeExample();

if (true) {
    let blockVar = "Inside Block";
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}