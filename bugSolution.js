```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Correctly handles zero inputs
  }
  return a / b; 
}
console.log(myFunction(10, 0)); // Returns 0 as expected
console.log(myFunction(0, 10)); // Returns 0 as expected
console.log(myFunction(10,5)); // Returns 2 as expected
```