const initServer = require('./server/server')
const init = require('./config/initModels')


try {
    init()
    initServer()
} catch (error) {
    console.log(error)    
}