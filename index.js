// JavaScript Utility App

// Main Menu Function
function mainMenu() {
    console.clear();
    console.log("=== JavaScript Utility App ===");
    console.log("1. String Operations");
    console.log("2. Array Operations");
    console.log("3. Math Operations");
    console.log("4. Date Operations");
    console.log("5. Object Operations");
    console.log("6. Promise and Async/Await Demo");
    console.log("7. RegExp Test");
    console.log("8. Error Handling Demo");
    console.log("9. Exit");
    
    const choice = prompt("Choose an option (1-9): ");
    switch (choice) {
        case '1': stringOperations(); break;
        case '2': arrayOperations(); break;
        case '3': mathOperations(); break;
        case '4': dateOperations(); break;
        case '5': objectOperations(); break;
        case '6': promiseDemo(); break;
        case '7': regExpTest(); break;
        case '8': errorHandlingDemo(); break;
        case '9': console.log("Goodbye!"); return;
        default: console.log("Invalid choice!"); mainMenu(); break;
    }
}

// String Operations
function stringOperations() {
    console.clear();
    const sample = "JavaScript is awesome!";
    console.log("=== String Operations ===");
    console.log(`Original String: ${sample}`);
    console.log(`Uppercase: ${sample.toUpperCase()}`);
    console.log(`Lowercase: ${sample.toLowerCase()}`);
    console.log(`Includes 'awesome': ${sample.includes('awesome')}`);
    console.log(`Replaced 'awesome' with 'great': ${sample.replace('awesome', 'great')}`);
    console.log(`Split by spaces: ${sample.split(' ')}`);
    console.log(`Substring (4, 10): ${sample.substring(4, 10)}`);
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Array Operations
function arrayOperations() {
    console.clear();
    const arr = [1, 2, 3, 4, 5];
    console.log("=== Array Operations ===");
    console.log(`Original Array: ${arr}`);
    console.log(`Reversed Array: ${arr.reverse()}`);
    console.log(`Mapped Array (x2): ${arr.map(x => x * 2)}`);
    console.log(`Filtered Array (>2): ${arr.filter(x => x > 2)}`);
    console.log(`Reduced Array (sum): ${arr.reduce((acc, x) => acc + x, 0)}`);
    console.log(`Flattened Array: ${[1, [2, 3], [4, 5]].flat()}`);
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Math Operations
function mathOperations() {
    console.clear();
    console.log("=== Math Operations ===");
    console.log(`PI: ${Math.PI}`);
    console.log(`Square Root of 16: ${Math.sqrt(16)}`);
    console.log(`Random Number (0-1): ${Math.random()}`);
    console.log(`Cosine of 45°: ${Math.cos(45 * Math.PI / 180)}`);
    console.log(`Max of [1, 2, 3]: ${Math.max(1, 2, 3)}`);
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Date Operations
function dateOperations() {
    console.clear();
    const now = new Date();
    console.log("=== Date Operations ===");
    console.log(`Current Date and Time: ${now}`);
    console.log(`Year: ${now.getFullYear()}`);
    console.log(`Month: ${now.getMonth() + 1}`);
    console.log(`Day: ${now.getDate()}`);
    console.log(`Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    console.log(`ISO String: ${now.toISOString()}`);
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Object Operations
function objectOperations() {
    console.clear();
    const obj = { name: 'JavaScript', type: 'Programming Language' };
    console.log("=== Object Operations ===");
    console.log(`Original Object: `, obj);
    console.log(`Keys: ${Object.keys(obj)}`);
    console.log(`Values: ${Object.values(obj)}`);
    console.log(`Entries: ${Object.entries(obj)}`);
    const newObj = Object.assign({}, obj, { popularity: 'High' });
    console.log(`New Object with added property: `, newObj);
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Promise and Async/Await Demo
function promiseDemo() {
    console.clear();
    console.log("=== Promise and Async/Await Demo ===");
    console.log("Simulating an asynchronous operation...");
    
    const asyncOperation = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Operation Successful!"), 2000);
    });

    asyncOperation
        .then(result => console.log(result))
        .catch(error => console.error(error))
        .finally(() => {
            prompt("Press Enter to return to main menu...");
            mainMenu();
        });
}

// RegExp Test
function regExpTest() {
    console.clear();
    const sample = "The quick brown fox jumps over the lazy dog.";
    const regExp = /quick/;
    console.log("=== RegExp Test ===");
    console.log(`Original String: ${sample}`);
    console.log(`Does it contain 'quick'? ${regExp.test(sample)}`);
    const match = sample.match(/quick|jumps|lazy/g);
    console.log(`Matched Words: `, match);
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Error Handling Demo
function errorHandlingDemo() {
    console.clear();
    console.log("=== Error Handling Demo ===");
    try {
        console.log("Trying to parse invalid JSON...");
        JSON.parse("{ invalid JSON }");
    } catch (error) {
        console.error("Caught an error: ", error.message);
    } finally {
        console.log("This runs regardless of an error occurring.");
    }
    prompt("Press Enter to return to main menu...");
    mainMenu();
}

// Initialize the App
mainMenu();
