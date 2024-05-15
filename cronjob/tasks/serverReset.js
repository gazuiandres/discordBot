const { exec } = require("child_process");
const { GUILD_ID } = process.env;
const resetServer = (client) => {
  if (!client) return;

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

  const guild = client.guilds.cache.find((guild) => guild.id === GUILD_ID);
  const channel = guild.channels.cache.find(
    (channel) => channel.name === "minecraft-server"
  );

  if (channel) return;
  channel.send("probando mensajes con el bot, no se asusten 🥸");
};

module.exports = resetServer;
