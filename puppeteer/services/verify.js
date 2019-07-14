module.exports = {
    async start(page, url){
        const response = await verify(page, url)
        return response
    }
}

async function verify(page, url){
    try{
        await page.goto( url, { waitUntil: 'domcontentloaded' })
        const select = await page.evaluate(() => {
            let elements = document.querySelector('form').innerText;
            return elements
        });
        return select
    }
    catch(error){
        console.error(error)
    }
}