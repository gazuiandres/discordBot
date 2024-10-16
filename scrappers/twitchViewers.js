const {firefox} = require('playwright')

const getTwitchViwers = async () => {
    const browser = await firefox.launch({
        headless: true, // Set to true to run in headless mode
        args: ['--mute-audio']
    });


    const page = await browser.newPage();

    await page.goto("https://www.twitch.tv/alehahze");
    await page.waitForLoadState('domcontentloaded')
    await page.click('[data-test-selector="chat-viewer-list"]');
    await page.waitForTimeout(4000)
    const viewersElements = page.locator('.ScCoreLink-sc-16kq0mq-0.esnIuC');
    const viewers = await viewersElements.evaluateAll(
        list => list.map(element => element.textContent));
    browser.close()
    return viewers
}

module.exports = getTwitchViwers
