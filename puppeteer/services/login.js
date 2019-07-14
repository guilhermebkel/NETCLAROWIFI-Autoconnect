const { connect } = require('./connect')

module.exports = {
    login
}

async function login(page, url){
    try{
        console.log('=> Logging in...')
        await page.goto( url, { waitUntil: 'domcontentloaded' })

        await page.click('#identify-choose')
        await page.keyboard.press('ArrowDown')
        await page.keyboard.press('ArrowDown')
        await page.keyboard.press('Enter')
        
        await page.type('#inputEmail', process.env.EMAIL)
        await page.type('#inputPassword', process.env.PASSWORD)

        await page.click('#conect-button')

        await page.screenshot({ path: 'status.png' })

        connect(page, url)
    }
    catch(error){
        console.error(error)
    }
}