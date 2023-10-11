const { createReadStream } = require("fs");


const stream = createReadStream("./content/big.txt", {
    encoding: "utf8",
    highWaterMark: 200, //maximum amount of bytes that node will read with each chunk of the stream
});

let count = 0;
stream.on("data", (result) => {
    console.log(result);
    count++;
})

stream.on("end", () => {
    console.log('The number of chunks received:', count);
});

stream.on('error', (err) => console.log(err))