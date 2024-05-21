const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
const { exec } = require("child_process");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { TOKEN, CLIENT_ID, SERVER_IP } = process.env;

const commands = [
  {
    name: "start",
    description: "Init minecraft server!",
  },
  {
    name: "stop",
    description: "Stop minecraft server",
  },
  {
    name: "status",
    description: "Show minecraft server status",
  },
  {
    name: "restart",
    description: "Restart minecraft server",
  },
  {
    name: "players",
    description: "Show the active players in the minecraft server",
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand) return;

  if (interaction.commandName === "start") {
    const member = interaction.guild.members.cache.get(interaction.user.id);
    const role = interaction.guild.roles.cache.find(
      (role) => role.name === "―― ♡ ┆ㅤ𝙲𝚘𝚛𝚘𝚗𝚊ㅤ ――"
    );
    const isAdmin = member.roles.cache.has(role.id);

    if (!isAdmin) {
      interaction.reply("No tienes permisos para esta acción");
      return;
    }

    exec("pm2 start server", async (err, stdout, stderr) => {
      if (err) {
        console.log("err in exec ", err);
        await interaction.reply("something goes wrong");
        return;
      }
      await interaction.reply("iniciando servidor");
    });
  }

  if (interaction.commandName === "stop") {
    const member = interaction.guild.members.cache.get(interaction.user.id);
    const role = interaction.guild.roles.cache.find(
      (role) => role.name === "―― ♡ ┆ㅤ𝙲𝚘𝚛𝚘𝚗𝚊ㅤ ――"
    );
    const isAdmin = member.roles.cache.has(role.id);

    if (!isAdmin) {
      interaction.reply("No tienes permisos para esta acción");
      return;
    }

    exec("pm2 stop server", async (err, stdout, stderr) => {
      if (err) {
        console.log("err in exec ", err);
        await interaction.reply("something goes wrong");
        return;
      }
      await interaction.reply("apagando servidor");
    });
  }

  if (interaction.commandName === "restart") {
    const member = interaction.guild.members.cache.get(interaction.user.id);
    const role = interaction.guild.roles.cache.find(
      (role) => role.name === "―― ♡ ┆ㅤ𝙲𝚘𝚛𝚘𝚗𝚊ㅤ ――"
    );
    const isAdmin = member.roles.cache.has(role.id);

    if (!isAdmin) {
      interaction.reply("No tienes permisos para esta acción");
      return;
    }

    exec("pm2 restart server", async (err, stdout, stderr) => {
      if (err) {
        console.log("err in exec ", err);
        await interaction.reply("something goes wrong");
        return;
      }
      await interaction.reply("reiniciando servidor");
    });
  }

  if (interaction.commandName === "status") {
    try {
      const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
      const data = await res.json();
      const status = data.online ? "online" : "off";
      interaction.reply(`status: ${status}`);
    } catch (error) {
      console.log("Error verificando status: ", error);
      interaction.reply("Ocurrio un error verificando status");
    }
  }

  if (interaction.commandName === "players") {
    try {
      const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
      const data = await res.json();
      const players = data.players;
      if (!players.list || players.online === 0) {
        interaction.reply("No hay jugadores activos en este momento.");
        return;
      }

      const playersName = players?.list
        .map((player) => `${player.name}`)
        .join("\n");

      interaction.reply(
        `Hay ${players.online} jugadores conectados:\n${playersName}`
      );
    } catch (error) {
      console.log("Error verificando players: ", error);
      interaction.reply("Ocurrio un error verificando players");
    }
  }
});

client.login(TOKEN).catch((err) => {
  console.log("Error al iniciar el bot ", err);
});

module.exports = client;
