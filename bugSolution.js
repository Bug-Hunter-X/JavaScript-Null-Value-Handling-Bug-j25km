function foo(a, b) {
  if (a === null && b === null) {
    return null; // Explicitly handle both null cases
  } else if (a === null || b === null) {
    return 0; // Handle cases with one null value
  }
  return a + b; // Simple addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0
console.log(foo(2, 5));   // Output: 7
console.log(foo(null, null)); //Output: null