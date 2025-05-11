// Write a Node.js program that simulates a basic banking application. 
// The program should allow users to perform deposit, withdrawal, or display their balance. 
// Utilize the readline-sync module for user input. Provide options for users to select their 
// desired operation (deposit, withdrawal, or display balance) and prompt them accordingly. Ensure error handling for insufficient balance during withdrawals.

const readline = require('readline-sync');

let balance = 1000;

function displayMenu() {
    console.log("\n=== Banking Application ===");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Display Balance");
    console.log("4. Exit");
}

function deposit() {
    let amount = parseFloat(readline.question("Enter deposit amount: "));
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
    } else {
        balance += amount;
        console.log(`₹${amount} deposited successfully.`);
    }
}

function withdraw() {
    let amount = parseFloat(readline.question("Enter withdrawal amount: "));
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
    } else if (amount > balance) {
        console.log("Insufficient balance.");
    } else {
        balance -= amount;
        console.log(`₹${amount} withdrawn successfully.`);
    }
}

function displayBalance() {
    console.log(`Current Balance: ₹${balance}`);
}

while (true) {
    displayMenu();
    let choice = readline.question("Select an option (1-4): ");

    switch (choice) {
        case '1':
            deposit();
            break;
        case '2':
            withdraw();
            break;
        case '3':
            displayBalance();
            break;
        case '4':
            console.log("Exiting... Thank you for using our banking system!");
            process.exit();
        default:
            console.log("Invalid choice. Please enter 1, 2, 3, or 4.");
    }
}
