async function boot(){
    console.log('=> Setting up environmental variables')
    require('dotenv').config()

    setInterval(() => {
        console.log('=> Setting up puppeteer')
        require('./puppeteer').setup()
    }, 60000 * process.env.TIME_INTERVAL)
}

boot()