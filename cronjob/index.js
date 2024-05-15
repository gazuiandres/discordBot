const cron = require("node-cron");


const serverReset = require("./tasks/serverReset");


const initLog = (client) => {
  // cron.schedule("0 6 * * *", serverReset, {
//   timezone: "America/Mexico_City",
// });
// console.log(client)

cron.schedule("*/20 * * * * *", () => serverReset(client));

// console.log('cronjob activado')
}

module.exports = initLog