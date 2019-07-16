async function boot(){
    console.log('=> Setting up environmental variables')
    require('dotenv').config()
    console.log('=> Setting up puppeteer')
    await require('./puppeteer').setup()
    
    setInterval(async () => {
        console.log('=> Setting up puppeteer')
        await require('./puppeteer').setup()
    }, 60000 * process.env.TIME_INTERVAL)
}

boot()