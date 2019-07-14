const puppeteer = require('puppeteer-core');
const homeURL = 'https://www31.netcombowifi.com.br/portal/netwifi/greetings.htm'

module.exports = {
    setup
}

async function setup(){
    console.log('Launching browser...')
    const browser = await puppeteer.launch({executablePath: 'chromium-browser'})

    console.log('Openning new page...')
    const page = await browser.newPage()

    console.log('Setting up configurations...')
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36');
    await page.setViewport({ width:960,height:768 })

    
}

async function login(){
    try{
        
    
        console.log(`Redirecting to [${homeURL}]`)
        await page.goto( homeURL, { timeout: 40000, waitUntil: 'domcontentloaded' })

        await page.type('#inputEmail', process.env.EMAIL)
        await page.type('#inputPassword', process.env.PASSWORD)
        await page.click('#identify-choose')
        await page.click('#identify-choose > option:nth-child(3)')
        await page.screenshot({ path: 'basicRender.png' })
        const price = await page.evaluate(() => {
            let price = document.querySelector('#identify-choose').innerText;
            return price
        });
        console.log(price)

        console.log('Logging in...')
        await page.$eval( 'button.btn', form => form.click() )
    
        console.log('DONE!')
        await browser.close()
    }
    catch(error){
        console.log(error)
    }
}

login()