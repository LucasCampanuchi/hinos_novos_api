module.exports = init = async () => {
    const database = require("../database/connectionBd")
    
    try {
        await database.sync()        
        console.log('DB Sincronizada')
    } catch (error) {
        console.log(error);
    }
}