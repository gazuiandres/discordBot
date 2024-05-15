const {exec} = require('child_process')
const { GUILD_ID } = process.env
const resetServer = (client) => {
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
    console.log(client.guilds.cache.find(guild => guild.id === GUILD_ID))
}

module.exports = resetServer