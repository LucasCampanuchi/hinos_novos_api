const { readdir } = require('fs/promises')

module.exports = returnDir = async () => {

    const array = []

    const files = await readdir('./files');
    for (const file of files)
        array.push(file.replace('.txt', ''))
   
    return array    
}
