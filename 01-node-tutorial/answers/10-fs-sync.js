const {readFileSync, writeFileSync} = require('fs')

writeFileSync(
    './temporary/fileA.txt',
    `\n Appending the File`,
    { flag: 'a'}
)

const fileContent = readFileSync('./temporary/fileA.txt', 'utf8')
    console.log(fileContent);
