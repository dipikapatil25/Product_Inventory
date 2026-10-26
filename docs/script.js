
// Interactive Product Inventory Dashboard

// Initial products
let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get HTML elements
const productForm = document.getElementById("productForm");
const productTable = document.getElementById("productTable");
const categoryFilter = document.getElementById("categoryFilter");
const message = document.getElementById("message");

// Category function using if...else and switch
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

// Calculate total inventory value
function calculateTotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }

    return total;
}

// Arrow function for tax and discount
const calculateFinalPrice = (
    price, tax = 0, discount = 0
) => {
    let discounted = price * (1 - discount / 100);
    return discounted * (1 + tax / 100);
};

// Display products in table
function displayProducts() {
    productTable.innerHTML = "";

    const selectedCategory = categoryFilter.value;

    const filteredInventory = inventory.filter(product => {
        return selectedCategory === "All" ||
               getCategory(product.price) === selectedCategory;
    });

    filteredInventory.forEach((product, index) => {
        const row = document.createElement("tr");

        const numberCell = document.createElement("td");
        numberCell.textContent = index + 1;

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = `$${product.price}`;

        const categoryCell = document.createElement("td");
        const badge = document.createElement("span");
        const category = getCategory(product.price);

        badge.className = `badge ${category}`;
        badge.textContent = category;
        categoryCell.appendChild(badge);

        row.append(
            numberCell,
            nameCell,
            priceCell,
            categoryCell
        );

        productTable.appendChild(row);
    });

    if (filteredInventory.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "No products found.";
        row.appendChild(cell);
        productTable.appendChild(row);
    }
}

// Update financial analytics
function updateAnalytics() {
    const total = calculateTotal(inventory);

    document.getElementById("totalProducts").textContent =
        inventory.length;

    document.getElementById("totalValue").textContent =
        `$${total}`;

    const affordable = inventory.filter(product => {
        return product.price < 200;
    });

    document.getElementById("affordableCount").textContent =
        affordable.length;

    const affordableList =
        document.getElementById("affordableList");

    affordableList.innerHTML = "";

    affordable.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        affordableList.appendChild(li);
    });

    const formattedReport = inventory.map(product => {
        return `${product.name.toUpperCase()}: $${product.price}`;
    });

    const reportList =
        document.getElementById("formattedReport");

    reportList.innerHTML = "";

    formattedReport.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        reportList.appendChild(li);
    });

    // Also show teacher's required console output
    console.log("--- Processing Inventory Roster (forEach) ---");

    inventory.forEach(product => {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
        );
    });

    console.log("--- Financial Analytics ---");
    console.log(`Total Inventory Value: $${total}`);
    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordable.map(product => product.name))
    );
    console.log(
        "Formatted Report List:",
        JSON.stringify(formattedReport)
    );
}

// Add new product
productForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("productName")
        .value.trim();

    const priceInput =
        document.getElementById("productPrice").value.trim();

    const price = Number(priceInput);

    if (
        name === "" ||
        priceInput === "" ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        message.style.color = "red";
        message.textContent =
            "Please enter a valid product name and price.";
        return;
    }

    inventory.push({
        name: name,
        price: price
    });

    console.log(
        `[Prompt executed: User adds "${name}" at "$${price}"]`
    );

    message.style.color = "green";
    message.textContent = "Product added successfully!";

    productForm.reset();

    displayProducts();
    updateAnalytics();
});

// Filter by category
categoryFilter.addEventListener("change", displayProducts);

// Initialize dashboard
console.log("--- Initializing Inventory System ---");

displayProducts();
updateAnalytics();

