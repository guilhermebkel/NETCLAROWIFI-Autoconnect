module.exports = {
    start(page, url){
        connect(page, url)
    }
}

async function connect(page, url){
    try{
        console.log('=> Connecting...')
        await page.goto( url, { timeout: 40000, waitUntil: 'domcontentloaded' })
        await page.click('#identify-choose')
        console.log('----> DONE!')
    }
    catch(error){
        console.error(error)
    }
}