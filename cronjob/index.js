const cron = require("node-cron");

const serverReset = require("./tasks/serverReset");

const initLog = (client) => {
  console.log('cronjob activado')
  cron.schedule("0 6 * * *", () => serverReset(client), {
    timezone: "America/Mexico_City",
  });

  cron.schedule("0 18 * * *", () => serverReset(client), {
    timezone: "America/Mexico_City",
  });
};

module.exports = initLog;
