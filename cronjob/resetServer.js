const cron = require("node-cron");

const serverReset = require("../utils/serverReset");


// cron.schedule("0 6 * * *", serverReset, {
//   timezone: "America/Mexico_City",
// });

cron.schedule("*/20 * * * * *", serverReset);

console.log('cronjob activado')