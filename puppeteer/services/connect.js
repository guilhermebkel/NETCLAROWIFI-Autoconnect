module.exports = {
    start(page, url){
        connect(page, url)
    }
}

async function connect(page, url){
    try{
        console.log('=> Connecting...')
        await page.goto( process.env.KEY || url, { waitUntil: 'domcontentloaded' })
        await page.click('#formVideo > button')
        await page.waitForNavigation({'waitUntil': 'networkidle0'});
        await page.waitForNavigation({'waitUntil': 'networkidle0'});
        await page.screenshot({ path: 'status.png' })
        console.log('----> DONE!')
    }
    catch(error){
        console.error(error)
    }
}