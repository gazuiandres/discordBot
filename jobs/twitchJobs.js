const EventEmitter = require('node:events');
const twitchViewersScrapper = require('../scrappers/twitchViewers')
class TwitchJob extends EventEmitter {}

const twitchJob = new TwitchJob();


twitchJob.on("get-viewers-list", async (callBack) => {
    const list = await twitchViewersScrapper()
    callBack(list)
})

module.exports = twitchJob