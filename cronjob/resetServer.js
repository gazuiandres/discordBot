const cron = require('node-cron');

const serverReset = require('../utils/serverReset')


cron.schedule('*/30 * * * * *', serverReset);