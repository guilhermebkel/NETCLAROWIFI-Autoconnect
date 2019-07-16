module.exports = {
    connect
}

async function connect(page, url){
    try{
        console.log('=> Connecting...')
        await page.goto( process.env.KEY || url, { waitUntil: 'domcontentloaded' })

        console.log('Clicked on connect button...')
        await page.click('#formVideo > button')

        const isConnected = await page.evaluate(() => document.querySelector('body > div.container.container-success > div > div.row.col-md-12.col-sm-12 > div > div.saudacao > div').innerText)
        if (isConnected) return console.log('----> ALREADY CONNECTED!')
        
        console.log('Browsed into sponsor page...')
        await page.waitForSelector('#video > div.vjs-poster', { visible: true, timeout: 0 })
        
        setTimeout(async () => {
            console.log('Started watching sponsor video...')
            await page.click('#video > div.vjs-poster')
        }, 5000)

        await page.waitForSelector('body > div.container.container-success > div > div.row.col-md-12.col-sm-12 > div > div.saudacao > div', { visible: true, timeout: 0 })
        console.log('----> DONE!')
    }
    catch(error){
        console.error(error)
    }
}