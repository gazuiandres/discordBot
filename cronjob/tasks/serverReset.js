const { exec } = require("child_process");
const { GUILD_ID } = process.env;
const resetServer = (client) => {
  if (!client) return;

  const guild = client.guilds.cache.find((guild) => guild.id === GUILD_ID);
  const channel = guild.channels.cache.find(
    (channel) => channel.name === "minecraft-server"
  );

  if (!channel) return;
  channel.send(`<@&1240396602624049344> probando mensaje del bot`);
  setTimeout(() => {
    //   console.log('Reiniciando servidor')
    //   exec('pm2 restart server', async (err, stdout, stderr) => {
    //       if(err) {
    //           console.log('err reseteando el servidor ', err)
    //           return;
    //       }
    //       console.log('Servidor reiniciado')
    //   })
    channel.send("simulando reseteo automatico, no se asusten");
  }, 15000);
  
};

module.exports = resetServer;
