setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 900);
//increment up by 200 each time, repeating the characters until 2 full spins of the spinner. 
setTimeout(() => {
  process.stdout.write('\r/    ');
}, 1100); 

setTimeout(() => {
  process.stdout.write('\r-    ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 1700);

// by this time, it returns two full spins of the spinner. 