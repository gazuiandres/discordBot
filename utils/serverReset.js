const {exec} = require('child_process')

const resetServer = () => {
    // exec('pm2 stop server', async (err, stdout, stderr) => {
    //     if(err) {
    //         console.log('err reseteando el servidor ', err)
    //         return;
    //     }
    //     console.log('Apagando servidor para reseteo')
    // })

    // exec('pm2 reset server', async (err, stdout, stderr) => {
    //     if(err) {
    //         console.log('err reseteando el servidor ', err)
    //         return;
    //     }
    //     console.log('Reiniciando servidor')
    // })

    console.log('probando reset cada 30 segundos')
    setTimeout(() => {
        console.log('set time for cron')
    }, 2);
}

module.exports = resetServer