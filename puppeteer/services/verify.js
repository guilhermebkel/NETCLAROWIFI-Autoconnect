module.exports = {
    verify
}

async function verify(page, url, browser){
    try{
        await page.goto( url, { waitUntil: 'domcontentloaded' })
        return await page.evaluate(() => document.querySelector('#forgotLink').innerText) && await browser.close()
    }
    catch(error){
        console.error(error)
    }
}