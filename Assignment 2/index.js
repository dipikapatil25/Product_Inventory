const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: ", (billInput) => {

    rl.question("Enter tip percentage: ", (tipInput) => {

        let billAmount = Number(billInput);
        let tipPercentage = Number(tipInput);

        let tip = (billAmount * tipPercentage) / 100;

        let total = billAmount;
        total += tip;

        console.log(`Subtotal: $${billAmount}`);
        console.log(`Tip Percentage: ${tipPercentage}%`);
        console.log(`Calculated Tip: $${tip}`);
        console.log(`Total Amount to Pay: $${total}`);

        rl.close();
    });
});
