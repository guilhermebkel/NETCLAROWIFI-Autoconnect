module.exports = {
    connect
}

async function connect(page, url, browser){
    try{
        console.log('=> Connecting...')
        await page.goto( process.env.AUTOCONNECT ? process.env.KEY : url, { waitUntil: 'domcontentloaded' })

        console.log('Clicked on connect button...')
        await page.click('#formVideo > button')

        setTimeout(async () => {
            const isConnected = await page.evaluate(() => document.querySelector('body > div.container.container-success > div > div.row.col-md-12.col-sm-12 > div > div.saudacao > div'))
            if (isConnected) return console.log('----> ALREADY CONNECTED!') && await browser.close()
        }, 5000)
        
        await page.waitForSelector('#video > div.vjs-poster', { visible: true, timeout: 0 })
        console.log('Browsed into sponsor page...')
        
        setTimeout(async () => {
            await page.click('#video > div.vjs-poster')
            console.log('Started watching sponsor video...')
        }, 5000)

        await page.waitForSelector('body > div.container.container-success > div > div.row.col-md-12.col-sm-12 > div > div.saudacao > div', { visible: true, timeout: 0 })
        await browser.close()
        console.log('----> DONE!')
    }
    catch(error){
        await browser.close()
        console.error(error)
    }
}