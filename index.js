import { Client, GatewayIntentBits, REST, Routes} from 'discord.js';
import {exec} from 'child_process'
const client =  new Client({ intents: [GatewayIntentBits.Guilds] });

const {TOKEN, CLIENT_ID }= process.env

const commands = [
    {
      name: 'ls',
      description: 'Replies with something!',
    },
  ];
  
  const rest = new REST({ version: '10' }).setToken(TOKEN);
  
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand) return;

    if (interaction.commandName === 'ls') {
        // const member = interaction.guild.members.cache.get(interaction.user.id)
        // const role = interaction.guild.roles.cache.find(role => role.name === "Dioses");
        // const isAdmin = member.roles.cache.has(role.id)

        // if(!isAdmin) {
        //     interaction.reply('No tienes permisos para esta acción')
        //     return
        // }

        exec('ls -l', async (err, stdout, stderr) => {
            if(err) {
                console.log('err in exec ', err)
                await interaction.reply('something goes wrong');
                return;
            }
            await interaction.reply(stdout);
        })
    }
})

client.login(TOKEN).catch((err) => {
    console.log('Error al iniciar el bot ', (err))
})