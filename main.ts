import {Server} from './server/server'


const server = new Server()
server.bootstrap().then(server=>{
    console.log('Esta sendo executado na:', server.application.address())
}).catch(error=>{
    console.log('Servidor falhou para iniciar')
    console.error(error)
    process.exit(1)
})



// Comandos para rodar no Console 
// tsc -w
// nodemon dist/main.ts