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
        console.log('----> DONE!')
    }
    catch(error){
        console.error(error)
    }
}