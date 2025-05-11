// Write to program in node js to demonstrate the 
// synchronous and asynchronous read and write.

var fs = require('fs');

fs.readFile('randtext.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('Asynchronous Read: ' + data.toString());
});

try {
    const syncData = fs.readFileSync('randtext.txt'); 
    console.log('Synchronous Read: ' + syncData.toString());
} catch (err) {
    console.error(err);
}

fs.writeFile("input.txt", "Welcome to studying NodeJS.", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous Write Completed.");
});

fs.writeFileSync("input2.txt", "Welcome to studying NodeJS AGAIN.");
console.log("Synchronous Write Completed.");
