const {exec} = require('child_process')
import clientReady from '..'

const resetServer = () => {
    // exec('pm2 stop server', async (err, stdout, stderr) => {
    //     if(err) {
    //         console.log('err reseteando el servidor ', err)
    //         return;
    //     }
    //     console.log('Apagando servidor para reseteo')
    // })
    // setTimeout(() => {
    //     console.log('Reiniciando servidor')
    //     exec('pm2 start server', async (err, stdout, stderr) => {
    //         if(err) {
    //             console.log('err reseteando el servidor ', err)
    //             return;
    //         }
    //         console.log('Servidor reiniciado')
    //     })
    // }, 30000);
    console.log(clientReady.guilds.cache)
}

module.exports = resetServer