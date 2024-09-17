import Bank from "../src/bank";

//setup
const bank = new Bank();
const account = bank.createAccount("John Doe", 29, "2938298");

//scenario 1: sucessfully create account
if(account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2: account already exists
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

// scenario 3: sucessful deposit
try {
  bank.deposit(100, "2938298");
  console.log("Scenario 3 passed");
} catch (_) {
  console.log("Scenario 3 failed");
}

// scenario 4: negative deposit
try {
  bank.deposit(-10, "2938298");
  console.log("Scenario 4 failed");
} catch (_) {
  console.log("Scenario 4 passed");
}

// scenario 5: non-existant account
try {
  bank.deposit(100, "1234567");
  console.log("Scenario 5 failed");
} catch (_) {
  console.log("Scenario 5 passed");
}