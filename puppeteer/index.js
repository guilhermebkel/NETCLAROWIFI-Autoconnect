const puppeteer = require('puppeteer-core')
const { verify } = require('./services/verify')
const { login } = require('./services/login')
const { connect } = require('./services/connect')
const homeURL = process.env.URL

module.exports = {
    setup
}

async function setup(){
    try{
        console.log('Launching browser...')
        const browser = await puppeteer.launch({executablePath: 'chromium-browser'})
    
        console.log('Openning new page...')
        const page = await browser.newPage()
    
        console.log('Setting up configurations...')
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.75 Chrome/73.0.3683.75 Safari/537.36');
        await page.setViewport({ width: 500, height: 500 })
    
        if(process.env.AUTOCONNECT){
            connect(page, homeURL, browser)
            setInterval(async () => {
                await connect(page, homeURL, browser)
            }, 60000 * process.env.TIME_INTERVAL)
        }
        else{
            console.log('Verifying if login is needed...')
            await verify(page, homeURL, browser)
            ? login(page, homeURL, browser) 
            : connect(page, homeURL, browser)
        } 
    }
    catch(error){
        console.error(error)
    }
}