module.exports = {
    connect
}

async function connect(page, url){
    try{
        console.log('=> Connecting...')
        await page.goto( process.env.KEY || url, { waitUntil: 'domcontentloaded' })
        await page.click('#formVideo > button')
        setTimeout(async () => {
            await page.screenshot({ path: 'status.png' })
        }, 10000)
        console.log('----> DONE!')
    }
    catch(error){
        console.error(error)
    }
}