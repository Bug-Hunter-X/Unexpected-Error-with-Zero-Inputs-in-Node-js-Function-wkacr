```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This line is causing the bug
  }
  return a / b; 
}
console.log(myFunction(10, 0)); // Throws an error, instead of returning 0
```