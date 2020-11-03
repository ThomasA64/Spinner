let spinnerTwo = ["|","/","-","\\","|","/","-","\\"];
let incrementTime = 100
// used the typewriter code to loop through the array of the characters. 
for (const char of spinnerTwo) {
    incrementTime = incrementTime + 200
  setTimeout(() => {
    process.stdout.write(char + '\r   ');
  }, incrementTime)
} 
