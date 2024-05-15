const {exec} = require('child_process')

const resetServer = () => {
    exec('pm2 stop server', async (err, stdout, stderr) => {
        if(err) {
            console.log('err reseteando el servidor ', err)
            return;
        }
        console.log('Apagando servidor para reseteo')
    })
    setTimeout(() => {
        console.log('Reiniciando servidor')
        exec('pm2 reset server', async (err, stdout, stderr) => {
            if(err) {
                console.log('err reseteando el servidor ', err)
                return;
            }
            console.log('Servidor reiniciado')
        })
    }, 30000);
}

module.exports = resetServer