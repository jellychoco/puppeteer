
const puppeteer = require('puppeteer');
(async () => {
    try {

        const brawser = await puppeteer.launch({
            headless: false,
            defaultViewport: { width: 1600, height: 800 },

            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            ignoreDefaultArgs: ['--disable-extensions']
        });

        const page = await brawser.newPage();

        await page.goto('https://yeyak.seoul.go.kr/web/search/selectPageListDetailSearchImg.do');
    } catch (error) {
        console.log(error);
    }
})();
