const {readFile, writeFile} = require('fs').promises

writeFile('./temporary/temp1.txt', `\n Line1`, { flag: 'a' }) // write line 1
 .then(() => {
    return writeFile('./temporary/temp1.txt', `\n Line2`, { flag: 'a' });// write line 2.
    // Return the promise so you can chain the .then statements
 })
 .then // write the third line, and follow that with two more .then blocks,
 // one to call readFile to read it back out, and one to log the data to the screen.
    return writeFile('./temporary/temp1.txt', `\n Line3`,{ flag: 'a' }) // write line 1
 .then(() => {
   return readFile('./temporary/temp1.txt', "utf-8");
 })
 .then(data => {
    console.log('Data: ', data)
 })
 .catch((error) => {
     console.log("An error occurred: ", error)
 });