# JavaScript Null Value Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript related to null value handling.  The `foo` function intends to handle cases where either input (`a` or `b`) is `null`, but it may not handle the case where both are null to meet requirements.

## Bug Description
The `foo` function adds two numbers. It checks for `null` values and returns 0 if either is `null`. However, if both parameters are `null`, the code still returns 0, which might not be expected behavior.

## Solution
The solution clarifies the handling of null values, and it is improved. 

## How to Run
1. Clone the repository
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the files using a JavaScript environment (e.g., Node.js).