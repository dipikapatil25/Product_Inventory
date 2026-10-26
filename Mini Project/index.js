const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {

    console.log("--- Initializing Inventory System ---");

    let inventory = [
        { name: "Laptop", price: 800 },
        { name: "Mouse", price: 25 }
    ];

    let productName;
    let productPrice;

    while (true) {
        productName = (await rl.question(
            "Enter Product Name: "
        )).trim();

        let priceInput = (await rl.question(
            "Enter Product Price: "
        )).trim();

        productPrice = Number(priceInput);

        if (
            productName === "" ||
            priceInput === "" ||
            !Number.isFinite(productPrice) ||
            productPrice <= 0
        ) {
            console.log("Invalid input! Try again.");
            continue;
        }

        break;
    }
    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );

    function getCategory(price) {
        let category;

        if (price < 50) {
            category = "Budget";
        } else if (price < 500) {
            category = "Standard";
        } else {
            category = "Premium";
        }

        switch (category) {
            case "Budget":
                return "Budget";
            case "Standard":
                return "Standard";
            case "Premium":
                return "Premium";
            default:
                return "Unknown";
        }
    }

    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach((product) => {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
        );
    });

    function calculateTotal(products) {
        let total = 0;

        for (let product of products) {
            total += product.price;
        }

        return total;
    }

    const calculateFinalPrice = (
        price, tax = 0, discount = 0
    ) => {
        let discounted = price * (1 - discount / 100);
        return discounted * (1 + tax / 100);
    };

    // Filter affordable products
    let affordableProducts = inventory
        .filter(product => product.price < 200)
        .map(product => product.name);


    let formattedReport = inventory.map(product =>
        `${product.name.toUpperCase()}: $${product.price}`
    );


    console.log("\n--- Financial Analytics ---");

    console.log(
        `Total Inventory Value: $${calculateTotal(inventory)}`
    );

    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordableProducts)
    );

    console.log(
        "Formatted Report List:",
        JSON.stringify(formattedReport)
    );

    rl.close();
}

main().catch(error => {
    console.error(error);
    rl.close();
});
