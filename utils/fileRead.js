const { readFile } = require('fs/promises')

const returnContent = (text, name) => {
    const arrayText = text.replace('\r', '').split('\n')

    if(arrayText[1] == '' || arrayText[1] == '\r'){
        arrayText.splice(0, 2)
        return arrayText.join('\n')
    } else {
        arrayText.splice(0, 3)
        return arrayText.join('\n')
    }
}

module.exports = fileRead = async (name) => {
    const text = await readFile(`./files/${name}.txt`, 'utf8')

    const title = text.split('\n')[0]
    const content = returnContent(text, name)
    
    return {
        title,
        content
    }
}