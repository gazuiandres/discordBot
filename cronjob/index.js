const cron = require("node-cron");


const serverReset = require("./tasks/serverReset");


const initLog = (client) => {
  // console.log('cronjob activado')
  cron.schedule("31 14 * * *", () => serverReset(client), {
  timezone: "America/Mexico_City",
});
// console.log(client)

// cron.schedule("*/20 * * * * *", () => serverReset(client));

}

module.exports = initLog