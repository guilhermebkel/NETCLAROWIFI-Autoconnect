module.exports = {
    async start(page, url){
        const response = await verify(page, url)
        return response
    }
}

async function verify(page, url){
    try{
        await page.goto( url, { waitUntil: 'domcontentloaded' })
        return await page.evaluate(() => document.querySelector('#forgotLink').innerText)
    }
    catch(error){
        console.error(error)
    }
}