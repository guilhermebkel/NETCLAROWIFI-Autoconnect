async function boot(){
    console.log('=> Setting up environmental variables')
    require('dotenv').config()
    console.log('=> Setting up puppeteer')
    require('./puppeteer').setup()
}

boot()