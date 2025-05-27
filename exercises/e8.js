
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const maxBalance = [];
  const accont = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      maxBalance.push(array[i]);
    }
  }
  if (maxBalance.length === 0) {
    return [];
  }
  let max = maxBalance[0].balance;
  for (let i = 1; i < maxBalance.length; i++) {
    if (maxBalance[i].balance > max) {
      max = maxBalance[i].balance;
    }
  }
  for (let i = 0; i < maxBalance.length; i++) {
    if (maxBalance[i].balance === max) {
      accont.push(maxBalance[i]);
    }
  }
  return accont;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
