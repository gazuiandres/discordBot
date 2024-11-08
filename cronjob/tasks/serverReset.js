const { exec } = require("child_process");
const { GUILD_ID } = process.env;
const resetServer = (client) => {
  if (!client) return;

  const guild = client.guilds.cache.find((guild) => guild.id === GUILD_ID);
  const channel = guild.channels.cache.find(
    (channel) => channel.name === "minecraft-server"
  );

  if (!channel) return;
  // channel.send(
  //   `<@&1240396602624049344> El servidor se reiniciara por mantenimiento en 5 minutos, tomen sus precauciones 🙆‍♂️`
  // );
  setTimeout(() => {
    console.log("Reiniciando servidor");
    exec("pm2 restart server", async (err, stdout, stderr) => {
      if (err) {
        console.log("err reseteando el servidor ", err);
        return;
      }
      console.log("Servidor reiniciado");
    });
    // channel.send("<@&1240396602624049344> Servidor inciando nuevamente");
  }, 300000);
};

module.exports = resetServer;
