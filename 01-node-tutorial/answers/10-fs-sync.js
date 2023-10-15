const {readFileSync, writeFileSync} = require('fs')

writeFileSync(
    './temporary/fileA.txt',
    `\n Appending the File1 ` +
    `\n Appending the File2 ` +
    `\n Appending the File3`,
    { flag: 'a'}
)

const fileContent = readFileSync('./temporary/fileA.txt', 'utf8')
    console.log(fileContent);
