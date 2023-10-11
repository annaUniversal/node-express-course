const { isUtf8 } = require("buffer");

const { writeFile, readFile } = require("fs").promises;

async function writer(){
    try{
        await writeFile('./temporary/temp.txt', `\n Line1 \n Line2 \n Line 3`);
        console.log('Writing data to the file');
    } catch (error){ 
        console.log('Can not write file', error);
    }
}

async function reader (){
    try{
        const data = await readFile('test.txt', "utf-8");
        console.log(data)
    } catch (error){ 
        console.log('Can not read file', error);
    }
}

async function readWrite(){
    await writer();
    await reader();
}

readWrite();


