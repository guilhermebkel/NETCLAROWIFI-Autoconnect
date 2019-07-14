module.exports = {
    verify
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